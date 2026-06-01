const GITHUB_USER = 'wanggoldx';
const CACHE_KEY = 'gh_repos';
const CACHE_TTL = 3600000;

const LANG_COLORS = {
  Python: '#3572A5',
  'C++': '#f34b7d',
  C: '#555555',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

export function getLanguageColor(lang) {
  return LANG_COLORS[lang] || '#858585';
}

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

export async function fetchRepos(repoNames) {
  const cached = loadCache();
  if (cached) return cached;

  const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const repos = await res.json();
  const map = {};
  repos.forEach(r => { map[r.name] = r; });

  const result = repoNames.map(name => map[name] || null);
  saveCache(result);
  return result;
}
