const { check } = require("express-validator");

// console.log(check());

module.exports = [
  check("userName", "User name must be not empty").notEmpty(),
  check("userEmail", "Not valid email").isEmail(),
  check("userPassword", "Password must be minimum 4 symbol").isLength({
    min: 4,
    max: 10,
  }),
];
