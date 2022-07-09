

const sessionController = {};

sessionController.setCookie = (req, res, next) => {
  res.cookie('user_name', res.locals[0].user_name);
  next();
};


module.exports = sessionController;