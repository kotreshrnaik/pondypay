const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const {
  create,
  getUsersById,
  getUsers,
  updateUser,
  deleteUser,
  getUsersByUserEmail
} = require("./user.service");

const { sign } = require("jsonwebtoken")

module.exports = {
  createuser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUsersById: (req, res) => {
    const id = req.params.id;
    getUsersById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
      }
      return res.json({
        success: 1,
        message: "Updated Successfully.",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "User deleted successfully.",
      });
    });
  },
  login: (req, res) => {
      const body = req.body;
      getUsersByUserEmail(body.email, (err, results) => {
          if (err) {
              console.log(err);
              return;
          }
          if(!results) {
              return res.json({
                  success: 0,
                  data: "Invalid Email or Password"
              })
          }
          const result = compareSync(body.password, results.password);
          if (result) {
              results.password = undefined;
              const jsontoken = sign({ result: results }, "qwe1234", {
                  expiresIn: "1h"
              })
              return res.json({
                  success: 1,
                  message: "login successfuly",
                  token: jsontoken,
                  user: results
              });
          } else {
              return res.json({
                  success: 0,
                  data: "Invalid email or password"
              })
          }
      })
  }
};
