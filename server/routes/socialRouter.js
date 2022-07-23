const express = require('express');
const socialController = require('../controllers/socialController');
const tokenController = require('../controllers/tokenController');

const router = express.Router();

router.get('/', tokenController.verifyToken, socialController.getAllPosts, (req, res) => {
  return res.status(200).json(res.locals.posts);
});

router.post('/', tokenController.verifyToken, tokenController.decodeToken, socialController.createPost, (req, res) => {
  return res.status(200).json({ postId: res.locals.postId });
});

router.delete('/:postId', tokenController.verifyToken, tokenController.decodeToken, socialController.deleteValitation, socialController.deletePost, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
