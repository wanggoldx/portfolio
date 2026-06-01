export interface ProjectConfig {
  repo: string;
  title: string;
  description: string;
  techStack: string[];
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
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
