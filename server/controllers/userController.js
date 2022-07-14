const bcrypt = require('bcryptjs');
const db = require('../db.js');

const userController = {}; // Populated with middleware functions then exported

userController.getUser = (req, res, next) => {
  // Destructure email from request parameters
  const { id } = req.params;

  // Construct a query to get the user's info from the database
  const values = [ id ];
  const query = 'SELECT * FROM user WHERE pk_user_id = $1';
  db.query(query, values) 
    .then((data) => {
      // Save the user's data to be used later
      const userData = data.rows[0];
      res.locals.userData = userData;
      return next(); // Continue to next middleware
    })
    .catch((err) => next({
      log: 'An error occured while retrieving a user data',
      message: err.message,
    }));
};

// 👀 TODO: Use with JWT 👀
userController.createUser = async (req, res, next) => {
  // Desctructure info needed to register a new user from the request body
  const { firstName, lastName, email, password } = req.body;

  // Encrypt password with a salt factor of 10
  const hash = await bcrypt.hash(password, 10);

  // Create a timestamp leveraging the postgres to_timestamp function
  const timestamp = `to_timestamp(${Date.now()} / 1000.0)`;

  // Construct a query to register a new user to the database
  const values = [ firstName, lastName, email, hash ];
  const query = 'INSERT INTO users (name_first, name_last, email, password, user_created_at) ' +
               `VALUES ($1, $2, $3, $4, ${timestamp}) RETURNING pk_user_id`;
  db.query(query, values)
    .then((data) => {
      // Save the user's id to be used by JWT for session token auth
      const userId = data.rows[0].pk_user_id;
      res.locals.userId = userId;
      return next(); // Continue to next middleware
    })
    .catch((err) => next({
      log: 'An error occured while creating a user',
      message: err.message,
    }));
};

// 👀 TODO: Use with JWT 👀
userController.loginUser = (req, res, next) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;

  // Construct a query to retrieve a user's password for verification
  const values = [ email ]
  const query = `SELECT * FROM users WHERE email = $1`;
  db.query(query, values)
    .then(async (data) => {
      const userData = data.rows[0];
      if (userData) {
        // Compare the request password with the hashed password for this user
        const valid = await bcrypt.compare(password, userData.password);
        if (valid) { // The password was correct
          return next(); // Continue to next middleware
        } else { // The password was incorrect
          // Respond with a 404 informing the front-end that the password does not exist
          return next({
            log: 'A user provided an incorrect password upon login',
            message: 'Invalid password',
            status: 404
          });
        }
        } else {
          // Respond with a 404 informing the front-end that the email does not exist
          return next({
            log: 'A user provided an incorrect email upon login',
            message: 'Invalid email',
            status: 404
          });
        }
    })
    .catch((err) => next({
      log: 'An error occured while trying to verify a user\'s password',
      message: err.message,
    }));
};

userController.deleteUser = (req, res, next) => {
  // Destructure name from the parameters
  const { name } = req.params;

  // Construct a query to delete a user where the names match
  const values = [ name ];
  const query = `DELETE FROM users WHERE name_first = $1`;
  db.query(query, values)
    .then((data) => {
      // Respond with a 404 informing the front-end that the user does not exist
      if (!data) return next({
        log: 'User was not found',
        message: 'User cannot be deleted',
        status: 404
      });
      return next(); // Continue to next middleware
    })
    .catch((err) => next({
      log: 'An error occured while deleting a user',
      message: err.message,
    }));
};

module.exports = userController;
