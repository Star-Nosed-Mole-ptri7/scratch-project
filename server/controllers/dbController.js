const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://otuxrvdv:Q1-zrxVqaZ9l9P2EGT6IxS2SsH2Frp_p@heffalump.db.elephantsql.com/otuxrvdv",
});

const dbController = {};

dbController.getTest = (req, res, next) => {
  // pool.query('SELECT * FROM algos ORDER BY id')
  pool.query('SELECT * FROM test')
    .then((data) => {
      console.log(data.rows);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

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

module.exports = dbController;