const express = require('express');
const apiController = require('../controllers/apiController');
const tokenController = require('../controllers/tokenController');
const router = express.Router();

//Routes API request to server so we can access the private API_KEY

//car
router.post('/car', tokenController.verifyToken, tokenController.decodeToken, apiController.carStat, (req, res) => {
  return res.status(200);
});

//bike
router.post('/bike', tokenController.verifyToken, tokenController.decodeToken, apiController.bikeStat, (req, res) => {
  return res.status(200);
});

//home
router.post('/home', tokenController.verifyToken, tokenController.decodeToken, apiController.homeStat, (req, res) => {
  return res.status(200);
});

module.exports = router;