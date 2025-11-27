const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

// get all tasks
router.get('/all', async (req, res) => {
  try {
    const allTasks = await Task.allTasks(req.params.userid);
    res.status(201).json({message: `All tasks found.`, tasks: allTasks});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// get task by id
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Not found' });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// create new task
router.post('/add', async (req, res) => {
  try {
    const newTask = await Task.create({
        task: req.body.task
    });
    res.status(201).json({
      message: `${req.body.task} successfully added.`, task: newTask});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update task by id
router.put('/:id/update', async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedTask = await Task.update({ id, updates });
    res.status(201).json({
      message: `Task successfully updated.`, task: updatedTask});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

  // Delete task by id
router.delete('/:id/delete', async (req, res) => {
  try {
    await Task.delete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

