const db = require('../db/connection');

const Task = {
  
  // Return all tasks 
  async allTasks() {
    const res = await db.query('SELECT id, title, description, status, due_date FROM tasks ORDER BY due_date');
    return res.rows;
  },
  
  // Creat new task
  async create(task) {
    const { id, title, description, status, due_date } = task;
    const res = await db.query(
      'INSERT INTO tasks(id, title, description, status, due_date) VALUES($1, $2, $3, $4, $5) RETURNING id, title, description, status, due_date',
      [id, title, description, status, due_date]
    );
    return res.rows[0];
  }

};

module.exports = Task;

