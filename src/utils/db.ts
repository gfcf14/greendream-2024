import DatabaseConstructor, { Database } from 'better-sqlite3';
import path from 'path';

const openDb: () => Database = () => {
  const dbPath = path.join(process.cwd(), 'private', 'greendream.db');
  const db: Database = new DatabaseConstructor(dbPath, { readonly: true });
  return db;
};

export default openDb;
