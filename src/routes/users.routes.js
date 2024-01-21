const express = require("express");
const {
  login,
  register,
  processLogin,
  processRegister,
} = require("../controllers/usersController");
const { createUser } = require("../controllers/usersController");
const userRegisterValidator = require("../validations/user-register-validator");

const router = express.Router();

/* /usuarios */
router
  .get("/ingreso", login)
  .get("/registro", register)
  .post("/ingreso", processLogin)
  .post("/registro", userRegisterValidator, processRegister);
//.post("/registro", createUser);

module.exports = router;
