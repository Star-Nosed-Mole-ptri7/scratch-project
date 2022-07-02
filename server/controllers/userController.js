const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://otuxrvdv:Q1-zrxVqaZ9l9P2EGT6IxS2SsH2Frp_p@heffalump.db.elephantsql.com/otuxrvdv",
});

const userController = {};

userController.getTest = (req, res, next) => {
  // pool.query('SELECT * FROM algos ORDER BY id')ß
  pool.query('SELECT * FROM "user"')
    .then((data) => {
      console.log(data.rows);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};


userController.createUser = (req, res, next) => {

  // // const {user_id, first_name, last_name, user_name, password, location_id} = req.body;
  // const values = [user_id, first_name, last_name, user_name, password, location_id];
  // const text = 'INSERT INTO "user" (user_id, first_name, last_name, user_name, password, location_id)' +
  //               `VALUES ('2', 'zuri', 'molina', 'zuzu', 'imapup', '11209')`;

  pool.query('INSERT INTO "user" (user_id, first_name, last_name, user_name, password, location_id)' +
  `VALUES ('3', 'rachel', 'masih', 'raymas', 'secretpass', '11209')`)
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
//     .then((data) => {
//       console.log(data.rows);
//       res.locals = data.rows;
//       return next();
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });
// };


// userController.deleteUser = (req, res, next) => {
//   // pool.query('SELECT * FROM algos ORDER BY id')
//   // pool.query('SELECT * FROM "user"')
//     .then((data) => {
//       console.log(data.rows);
//       res.locals = data.rows;
//       return next();
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });
// };


// For reference
// dbController.saveAlgo = (req, res, next) => {
//   pool.query(`INSERT INTO algos (algostring) VALUES ('${req.body.data}')`)
//   .then((data) => {
//     res.locals = data.rows;
//     return next();
//   })
//   .catch((err) => {
//       return next(console.log(err));
//     });
// };

// dbController.delAlgo = (req, res, next) => {
//   pool.query(`DELETE FROM algos WHERE id=${req.body.id}`)
//   .then((data) => {
//     res.locals = data.rows;
//     return next();
//   })
//   .catch((err) => {
//       return next(console.log(err));
//     });
// };

module.exports = userController;