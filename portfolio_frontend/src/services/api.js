const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
}
