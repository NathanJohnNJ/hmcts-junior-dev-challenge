const db = require('../db/connection');

async function setupDatabase(){
  try {
  // PostgreSQL does not support 'CREATE DATABASE IF NOT EXISTS'.
  // If you need to create the DB programmatically, run the CREATE DATABASE
  // statement separately and handle the duplicate_database error (SQLSTATE '42P04').
  // Skipping DB creation here; assume the database already exists.
    // await db.query('CREATE DATABASE tasks');
    await db.query('CREATE TABLE IF NOT EXISTS tasks ( id serial NOT NULL, title character varying(50) NOT NULL, description text, status character varying(50) NOT NULL, due_date date, CONSTRAINT tasksd_pkey PRIMARY KEY (id))');
  } catch (error){
    console.log('There was an error whilst setting up the database.');
    console.error(error);
  }
}

module.exports = { setupDatabase };
