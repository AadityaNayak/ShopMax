const bcrypt = require("bcryptjs");

const Users = [
  {
    name: "admin",
    email: "admin@shopmax.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "aaditya",
    email: "aaditya@shopmax.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = Users;