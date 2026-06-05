import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects';
import { migrate } from './database/migrate';
import { syncReposToDb } from './services/github';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_URL }));

// Raw body needed for webhook signature verification
app.use(express.json({
  verify: (req, _res, buf) => {
    (req as any).rawBody = buf.toString();
  },
}));

app.use('/api', projectsRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

async function start() {
  await migrate();
  await syncReposToDb();
  app.listen(PORT, 'localhost', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
