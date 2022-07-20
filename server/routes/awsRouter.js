const express = require('express');
const multer = require('multer');
const awsController = require('../controllers/awsController');
const tokenController = require('../controllers/tokenController');

const router = express.Router();
const upload = multer({ dest: 'server/uploads/', limits: { fileSize: 10000000 } });

router.post('/', tokenController.verifyToken, upload.single('upload'), awsController.upload, (req, res) => {
  res.status(200).json({ url: res.locals.url });
});

module.exports = router;
