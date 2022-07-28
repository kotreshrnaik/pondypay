const pool = require("../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into userregistration(firstname, lastname, email, phone, password) values(?,?,?,?,?)`,
      [data.firstname, data.lastname, data.email, data.phone, data.password],

      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUsers: (callback) => {
    pool.query(
      `select id, firstname, lastname, email, phone from userregistration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUsersById: (id, callback) => {
    pool.query(
      `select id, firstname, lastname, email, phone from userregistration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  updateUser: (data, callback) => {
    pool.query(
      `update userregistration set firstname=?, lastname=?, email=?, phone=?, password=? where id = ?`,
      [
        data.firstname,
        data.lastname,
        data.email,
        data.phone,
        data.password,
        data.id,
      ],
      (erorr, results, fields) => {
        if (erorr) {
          callback(erorr);
        }
        return callback(null, results);
      }
    );
  },

  deleteUser: (data, callback) => {
    pool.query(
      `delete from userregistration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getUsersByUserEmail: (email, callback) => {
    pool.query(
        `select * from userregistration where email = ?`,
        [email],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null, results[0])
        }
    );
  },
};
