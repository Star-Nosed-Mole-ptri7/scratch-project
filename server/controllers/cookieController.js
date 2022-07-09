

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('session_id', res.locals[0].user_name);
  next();
};


module.exports = cookieController;