import 'dotenv/config' 
import pkg from 'pg';
const { Pool } = pkg;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT version()');
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}

getPgVersion();