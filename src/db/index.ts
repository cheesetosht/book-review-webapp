import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// const {
//   PGHOST: host,
//   PGUSER: user,
//   PGDATABASE: database,
//   PGPASSWORD: password,
// } = process.env;

// export const connectionString = `postgresql://${user}:${encodeURIComponent(password)}@${host}`;

const connectionString = process.env.DATABASE_URL!;
// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, {
  ssl: { rejectUnauthorized: false },
  prepare: false,
});

export const db = drizzle(client);
