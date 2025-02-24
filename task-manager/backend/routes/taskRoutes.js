const express = require('express');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const router = express.Router();
const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET;

// Middleware to protect routes
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const decoded = jwt.verify(token, SECRET);
  req.userId = decoded.userId;
  next();

};

// Create task
router.post('/', authenticate, async (req, res) => {
  const { title, description } = req.body;
  const task = await prisma.task.create({
    data: { title, description, userId: req.userId }
  });
  res.json(task);
});

// Get all tasks for user
router.get('/', authenticate, async (req, res) => {
  const tasks = await prisma.task.findMany({ where: { userId: req.userId } });
  res.json(tasks);
});

// Update task
router.put('/:id', authenticate, async (req, res) => {
  const { title, description, isComplete } = req.body;
  const task = await prisma.task.update({
    where: { id: req.params.id, userId: req.userId },
    data: { title, description, isComplete }
  });
  res.json(task);
});

// Delete task
router.delete('/:id', authenticate, async (req, res) => {
  await prisma.task.delete({ where: { id: req.params.id, userId: req.userId } });
  res.json({ message: 'Task deleted' });
});

module.exports = router;
