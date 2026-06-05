import pool from './db';

const MIGRATION_SQL = `
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  repo TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
`;

export async function migrate(): Promise<void> {
  await pool.query(MIGRATION_SQL);
  console.log('Database migration completed.');
}
