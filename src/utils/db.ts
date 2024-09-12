import DatabaseConstructor, { Database } from 'better-sqlite3';

const openDb: () => Database = () => {
  let db: Database = new DatabaseConstructor('greendream.db');

  return db;
};

export default openDb;
