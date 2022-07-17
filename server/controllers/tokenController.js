const jwt = require('jsonwebtoken');

const tokenController = {};

tokenController.verifyToken = (req, res, next) => {
  // Destructure the jwt token from the client's cookies
  const { token } = req.cookies;
  
  // Return unauthorized status code if they don't have a jwt token
  if (!token) return res.sendStatus(403);
  
  // Verify the token they have
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    // Abort early when the token is invalid : otherwise continue to next middleware
    return err ? res.status(403).send('Invalid Token') : next();
  });
};

module.exports = tokenController;
