const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/:name', userController.getUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.get('/search/:name', userController.searchItem, (req, res) => {
  console.log('search route working!')
  res.status(200).send(res.locals.data)
})

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/login', userController.loginUser, sessionController.setCookie, (req, res) => {
  return res.status(200).send(res.locals);
});

router.delete('/:name', userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals);
});

router.get('/search', (req,res) => {
  console.log('this is the search endpoint')
})

//STRETCH FEATURE//
// router.patch('/', userController.editUser, (req, res) => {
//   return res.status(200).send(res.locals)
// });



//front end routes for  search bar
router.get('/search/:item_name', userController.searchItem, (req, res) => {
  //save data from db into res.locals
  console.log(req.params)
  let returnedData = res.locals.dbReturn;

  return res.status(200).send(returnedData)
})


module.exports = router;