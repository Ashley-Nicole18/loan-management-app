import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config()

const connectionString = process.env.DATABASE_URL

const pool = new Pool({

    connectionString : connectionString
    ? connectionString
    : undefined,

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,

    ssl: connectionString ? { rejectUnauthorized: false } : undefined

})


pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client',err);
    process.exit(-1);
});

export default pool;