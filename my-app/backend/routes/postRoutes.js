import express from 'express';
import { validatePost } from '../middleware/validators.js';
import { validationResult } from 'express-validator';
import Post from '../models/Post.js';

const router = express.Router();

// GET /api/posts?keyword=react&category=tech
router.get('/', async (req, res, next) => {
  const keyword = req.query.keyword
    ? { title: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const category = req.query.category
    ? { category: req.query.category }
    : {};

  try {
    const posts = await Post.find({ ...keyword, ...category }).populate('category');
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.post('/', validatePost, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validatePost, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
});

// POST /api/posts/:id/comments
router.post('/:id/comments', async (req, res, next) => {
  const { name, text } = req.body;
  if (!name || !text) return res.status(400).json({ error: 'Name and comment text are required' });

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.comments.push({ name, text });
    await post.save();
    res.status(201).json(post.comments);
  } catch (err) {
    next(err);
  }
});

export default router;
