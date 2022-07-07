const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://otuxrvdv:Q1-zrxVqaZ9l9P2EGT6IxS2SsH2Frp_p@heffalump.db.elephantsql.com/otuxrvdv",
});

const userController = {};

userController.getTest = (req, res, next) => {
  pool.query('SELECT * FROM "user"')
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

userController.createUser = (req, res, next) => {

  const {first_name, last_name, user_name, password} = req.body;
  const values = [first_name, last_name, user_name, password];
  const text = 'INSERT INTO "user" (first_name, last_name, user_name, password)' +
                `VALUES ($1, $2, $3, $4)`;

  pool.query(text, values)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

// userController.updateUser = (req, res, next) => {
//   // pool.query('SELECT * FROM algos ORDER BY id')
//   // pool.query('SELECT * FROM "user"')

//   //username, pass 
//   //location, recycle progress
//     .then((data) => {
//       console.log(data.rows);
//       res.locals = data.rows;
//       return next();
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });
// };


userController.deleteUser = (req, res, next) => {

  const text = `DELETE FROM "user" WHERE user_id = ${req.params.id} `
  pool.query(text)
    .then((data) => {
      if(!data) return next ({message: 'User cannot be deleted'}) 
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

module.exports = userController;