require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('./db');

async function initDb() {
  try {
    // Read schema.sql file
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    
    // Execute the SQL commands
    await db.query(schema);
    console.log('Database tables created successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDb();
