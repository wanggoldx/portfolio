import axios from 'axios';
import crypto from 'crypto';
import pool from '../database/db';
import { DBProject, GitHubRepo, Project } from '../types';

const GITHUB_USER = process.env.GITHUB_USER || 'wanggoldx';

function capitalizeTopics(topics: string[]): string[] {
  return topics.map(t => t.charAt(0).toUpperCase() + t.slice(1));
}

function buildProject(dbProject: DBProject, apiRepo: GitHubRepo | null): Project {
  const imageUrl = apiRepo
    ? `https://opengraph.githubassets.com/1/${GITHUB_USER}/${dbProject.repo}`
    : null;

  return {
    title: dbProject.title,
    description: dbProject.description,
    techStack: apiRepo?.topics?.length ? capitalizeTopics(apiRepo.topics) : dbProject.tech_stack,
    githubLink: apiRepo?.html_url || `https://github.com/${GITHUB_USER}/${dbProject.repo}`,
    demoLink: apiRepo?.homepage || '',
    primaryLanguage: apiRepo?.language || null,
    image: imageUrl,
  };
}

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function syncReposToDb(): Promise<void> {
  try {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;
    const response = await axios.get<GitHubRepo[]>(url);
    const repos = response.data;

    let synced = 0;
    for (const repo of repos) {
      const result = await pool.query(
        `INSERT INTO projects (repo, title, description, tech_stack)
         VALUES ($1, $2, $3, '[]'::jsonb)
         ON CONFLICT (repo) DO NOTHING`,
        [repo.name, repo.description || repo.name, repo.description || '']
      );
      if (result.rowCount && result.rowCount > 0) synced++;
    }

    console.log(`GitHub sync completed. ${synced} new repos added.`);
  } catch (error) {
    console.error('Error syncing repos to DB:', error);
  }
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const { rows: dbProjects } = await pool.query<DBProject>(
      'SELECT * FROM projects WHERE is_active = TRUE'
    );

    const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;
    const response = await axios.get<GitHubRepo[]>(url);
    const repos = response.data;

    const repoMap: Record<string, GitHubRepo> = {};
    repos.forEach(r => { repoMap[r.name] = r; });

    const enriched = dbProjects.map(db =>
      buildProject(db, repoMap[db.repo] || null)
    );

    return shuffle(enriched).slice(0, 5);
  } catch (error) {
    console.error('Error fetching projects:', error);

    const { rows: dbProjects } = await pool.query<DBProject>(
      'SELECT * FROM projects WHERE is_active = TRUE'
    );

    return dbProjects.map(db => buildProject(db, null));
  }
}

export async function upsertProject(repoName: string, data: {
  title?: string;
  description?: string;
  tech_stack?: string[];
}): Promise<void> {
  const title = data.title || repoName;
  const description = data.description || '';
  const techStack = JSON.stringify(data.tech_stack || []);

  await pool.query(
    `INSERT INTO projects (repo, title, description, tech_stack)
     VALUES ($1, $2, $3, $4::jsonb)
     ON CONFLICT (repo) DO UPDATE SET
       title = EXCLUDED.title,
       description = EXCLUDED.description,
       tech_stack = EXCLUDED.tech_stack,
       updated_at = NOW()`,
    [repoName, title, description, techStack]
  );
}

export async function deactivateProject(repoName: string): Promise<void> {
  await pool.query(
    'UPDATE projects SET is_active = FALSE, updated_at = NOW() WHERE repo = $1',
    [repoName]
  );
}

export async function deleteProject(repoName: string): Promise<void> {
  await pool.query('DELETE FROM projects WHERE repo = $1', [repoName]);
}

export async function renameProject(oldName: string, newName: string): Promise<void> {
  await pool.query(
    'UPDATE projects SET repo = $1, updated_at = NOW() WHERE repo = $2',
    [newName, oldName]
  );
}

export function verifyWebhookSignature(payload: string, signature: string | undefined): boolean {
  const secret = process.env.WEBHOOK_SECRET;
  if (!secret || !signature) return false;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const digest = `sha256=${hmac.digest('hex')}`;

  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function fetchRepoByName(repoName: string): Promise<GitHubRepo | null> {
  try {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${repoName}`;
    const response = await axios.get<GitHubRepo>(url);
    return response.data;
  } catch {
    return null;
  }
}
