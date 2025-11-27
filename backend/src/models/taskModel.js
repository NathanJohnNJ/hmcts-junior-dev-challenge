const db = require('../db/connection');

const Task = {
  // Return all tasks belonging to user
  async allTasks() {
    const res = await db.query('SELECT id, title, description, status, dueDate, due_date FROM tasks ORDER BY due_date');
    return res.rows;
  },
  
  // Creat new task
  async create(task) {
    const { id, title, notes, priority, completed, due_date, created_date, project_id, team_id, user_ids } = task;
    const res = await db.query(
      'INSERT INTO tasks(id, title, notes, priority, completed, due_date, created_date, project_id, team_id, user_ids) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, title, notes, priority, completed, due_date, created_date, project_id, team_id, user_ids',
      [id, title, notes, priority, completed, due_date, created_date, project_id, team_id, user_ids]
    );
    return res.rows[0];
  },

  // Update task by id
  // async update({ id, updates }) {
  //    const setClauses = Object.keys(updates).map((key, i) => `${key} = $${i + 2}`);
  //    const values = Object.values(updates);
  //    const query = `UPDATE tasks SET ${setClauses.join(', ')} WHERE id = $1`;
  //    const res = await db.query(query, [id, ...values]);
  //    return res.rows[0];
  //  },

  // Delete task by id
  // async delete(id) {
  //   await db.query('DELETE FROM tasks WHERE id=$1', [id]);
  //   return { success: true };
  // }
};

module.exports = Task;

