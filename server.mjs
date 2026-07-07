#!/usr/bin/env node
/**
 * postgresql-api · HTTP proxy for PostgreSQL
 * Sovereign estate wrapper for PostgreSQL · Database
 * Docs: https://www.postgresql.org/docs/
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'PostgreSQL' }));
  res.end(JSON.stringify({ name: 'postgresql-api', wraps: 'PostgreSQL', docs: 'https://www.postgresql.org/docs/' }));
}).listen(PORT, () => console.log('postgresql-api on', PORT));
