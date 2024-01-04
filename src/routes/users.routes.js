const express = require("express");
const { login, register } = require("../controllers/usersController");
const { createUser } = require("../controllers/usersController");

const router = express.Router();

/* /usuarios */
router.get("/ingreso", login).get("/registro", register);

router.post("/registro", createUser);

module.exports = router;
