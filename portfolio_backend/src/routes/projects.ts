import { Router, Request, Response } from 'express';
import { fetchProjects } from '../services/github';

const router = Router();

router.get('/projects', async (_req: Request, res: Response) => {
  try {
    const projects = await fetchProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router;
