import { PGlite } from '@electric-sql/pglite';

async function db_connection() {
  const db = new PGlite(':memory:'); // In-memory connection established

  try {
    // You can run queries here when needed
    console.log('✅ Connected to in-memory database');
  } catch (err) {
    console.error('❌ Connection error:', err);
  } finally {
    await db.close();
    console.log('🔌 Connection closed.');
  }
}

db_connection();
