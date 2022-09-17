// registration: save new user in database
// authefication: перевірка даних користувача з тими що у нас в бд
// authorization: перевірка прав доступу
// logout: видалення прав доступу

const router = require("express").Router();
const UsersController = require("../controllers/UsersController");
const authMiddleware = require("../middlewares/authMiddleware");
const { route } = require("./filmsRoutes");
const registerValidation = require("../middlewares/validation/registerValidation")

// const { check } = require("express-validator");

router.post(
  "/register",
  registerValidation,
  UsersController.register
);

// router.post(
//   "/register",
//   [
//     check("userName", "User name must be not empty").notEmpty(),
//     check("userPassword", "Password must be minimum 4 symbol").isLength({
//       min: 4,
//       max: 10,
//     }),
//   ],
//   UsersController.register
// );

router.post(
  "/login",
  (req, res, next) => {
    console.log("Спрацював Joi");
    next();
  },
  UsersController.login
);

router.get("/logout", authMiddleware, UsersController.logout);

router.get("/info", authMiddleware, UsersController.info);

module.exports = router;
