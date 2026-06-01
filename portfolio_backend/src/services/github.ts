import axios from 'axios';
import { GitHubRepo, ProjectConfig, Project } from '../types';

const GITHUB_USER = 'wanggoldx';

function capitalizeTopics(topics: string[]): string[] {
  return topics.map(t => t.charAt(0).toUpperCase() + t.slice(1));
}

function buildProject(config: ProjectConfig, apiRepo: GitHubRepo | null): Project {
  const imageUrl = apiRepo
    ? `https://opengraph.githubassets.com/1/${GITHUB_USER}/${config.repo}`
    : null;

  return {
    title: config.title,
    description: config.description,
    techStack: apiRepo?.topics?.length ? capitalizeTopics(apiRepo.topics) : config.techStack,
    githubLink: apiRepo?.html_url || `https://github.com/${GITHUB_USER}/${config.repo}`,
    demoLink: apiRepo?.homepage || '',
    primaryLanguage: apiRepo?.language || null,
    image: imageUrl,
  };
}

export async function fetchProjects(): Promise<Project[]> {
  const { PROJECTS_CONFIG } = await import('../data/projects');

  try {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;
    const response = await axios.get<GitHubRepo[]>(url);
    const repos = response.data;

    const repoMap: Record<string, GitHubRepo> = {};
    repos.forEach(r => { repoMap[r.name] = r; });

    return PROJECTS_CONFIG.map(config =>
      buildProject(config, repoMap[config.repo] || null)
    );
  } catch (error) {
    console.error('GitHub API error:', error);
    return PROJECTS_CONFIG.map(config => buildProject(config, null));
  }
}
