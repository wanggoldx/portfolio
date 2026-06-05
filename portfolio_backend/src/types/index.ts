export interface DBProject {
  id: number;
  repo: string;
  title: string;
  description: string;
  tech_stack: string[];
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  description: string | null;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  primaryLanguage: string | null;
  image: string | null;
}
