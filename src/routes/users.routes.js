const express = require("express");
const { login, register, perfil } = require("../controllers/usersController");
const { createUser } = require("../controllers/usersController");

const router = express.Router();

/* /usuarios */
router
.get("/ingreso", login)
.get("/registro", register)
.post("/registro",createUser)
.get('/perfil', perfil)
module.exports = router;
