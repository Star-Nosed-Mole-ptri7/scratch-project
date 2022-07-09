const { Pool } = require('pg');
const bcrypt = require('bcryptjs');


const pool = new Pool({
  connectionString: "postgres://otuxrvdv:Q1-zrxVqaZ9l9P2EGT6IxS2SsH2Frp_p@heffalump.db.elephantsql.com/otuxrvdv",
});

const userController = {};

userController.getUser = (req, res, next) => {

  pool.query(`SELECT * FROM "user" 
            WHERE user_name = '${req.params.name}'`) 
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

userController.createUser =  (req, res, next) => {
  const {first_name, last_name, user_name, password} = req.body;
  const hash = bcrypt.hash(password, 10)
  .then((hash) => {
    console.log(hash);
    const values = [first_name, last_name, user_name, hash];
    const text = `INSERT INTO "user" (first_name, last_name, user_name, password, recycle_progress)` +
                  `VALUES ($1, $2, $3, $4, 0)`;
  
    pool.query(text, values)
      .then((data) => {
        res.locals = data.rows;
        return next();
      })
      .catch((err) => {
        return next(console.log(err));
      });
    });

};

userController.loginUser = (req, res, next) => {
  const {user_name, password} = req.body;
  const text = `select * from "user" where user_name = '${user_name}'`;

  pool.query(text)
    .then((data) => {
      res.locals = data.rows;
      if (data.rows[0]) {
        // data.rows[0].password === password)
        bcrypt.compare(password, data.rows[0].password)
          .then((result) => {
            if (result) {
              console.log("Successful login");
              return next();
            } else {
              console.log("Invalid login");
            }
          })
        }
    })
    .catch((err) => {
      return next(console.log(err));
    });
};


userController.deleteUser = (req, res, next) => {

  const text = `DELETE FROM "user" WHERE user_name = '${req.params.name}'`
  pool.query(text)
    .then((data) => {
      if(!data) return next ({message: 'User cannot be deleted'}) 
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};



//STRETCH FEATURE//
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


module.exports = userController;