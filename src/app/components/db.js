import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "linktree",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const query = async (text, params, callback) => {
  return pool.query(text, params, callback);
};
