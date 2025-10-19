import express from 'express';
import { validateCategory } from '../middleware/validators.js';
import { validationResult } from 'express-validator';
import Category from '../models/Category.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.post('/', validateCategory, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
});

export default router;
