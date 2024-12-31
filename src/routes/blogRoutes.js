const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Blog routes
router.get('/posts', blogController.getAllPosts);
router.get('/posts/:slug', blogController.getPost);
router.post('/posts', blogController.createPost);
router.put('/posts/:slug', blogController.updatePost);
router.delete('/posts/:slug', blogController.deletePost);

module.exports = router;
