import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

app.use('/api', projectsRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
