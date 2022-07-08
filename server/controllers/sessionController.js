

const sessionController = {};

sessionController.setCookie = (req, res, next) => {
  res.cookie('loggedIn', 'true');
  next();
};


module.exports = sessionController;