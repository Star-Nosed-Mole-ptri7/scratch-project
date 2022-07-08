const { Pool } = require('pg');

//NEED TO INSTALL & REQUIRE BCRYPT//

const pool = new Pool({
  connectionString: "postgres://otuxrvdv:Q1-zrxVqaZ9l9P2EGT6IxS2SsH2Frp_p@heffalump.db.elephantsql.com/otuxrvdv",
});

const userController = {};



userController.getUser = (req, res, next) => {

  pool.query(`SELECT * FROM "user" 
            WHERE user_name = '${req.params.name}'`) //template literal isn't working?
    .then((data) => {
      console.log(data.rows);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

// userController.createUser = (req, res, next) => {

//   const {first_name, last_name, user_name, password, recycle_progress} = req.body;
//   const hash = bcrypt.hash(password, 10);
//   const values = [first_name, last_name, user_name, password, recycle_progress];
//   const text = `INSERT INTO "user" (first_name, last_name, user_name, ${hash}, recycle_progress)` +
//                 `VALUES ($1, $2, $3, $4, $5, $6)`;

//   pool.query(text, values)
//     .then((data) => {
//       res.locals = data.rows;
//       return next();
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });
// };

//   const {user_name, password} = req.body;
//   const values = [user_name, password];
//   const text = `SELECT user_name, password FROM "user" 
//                 WHERE user_name = ${req.params.name}`;
//   pool.query(text, values)
//     .then((data) => {
//       if(user_name) {
//         const validPass = bcrypt.compare(password, user.password);
//         if(validPass) {
//           return next ();
//         }else {
//           return next ({message: 'Wrong password!'});
//         }
//       } 
     
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });

// userController.updateUser = (req, res, next) => {

// const {password} = req.body;
// const values = [password];
// const text = `UPDATE "user"
//               SET password = ${password}
//               WHERE user_name = ${req.params.name}`
// pool.query(text, values)
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

//   const text = `DELETE FROM "user" WHERE user_name = ${req.params.name} `
//   pool.query(text)
//     .then((data) => {
//       if(!data) return next ({message: 'User cannot be deleted'}) 
//       return next();
//     })
//     .catch((err) => {
//       return next(console.log(err));
//     });
// };



module.exports = userController;