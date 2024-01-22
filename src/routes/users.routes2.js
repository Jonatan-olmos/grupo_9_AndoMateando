const express = require("express");
const { login, register, perfil ,processLogin, logout, processRegister} = require("../controllers/usersController");
const { createUser } = require("../controllers/usersController");
let logDBMiddleware = require('../middlewares/logDBMiddleware');
const { check } = require('express-validator');
const router = express.Router();
const checkAuthUser = require('../middlewares/checkAuthUser');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '.../public/images/profile'))
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'profile' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});


const upload = multer({ storage });


//Validaciones
const validateCreateForm = [
    check('nombre').notEmpty().withMessage('Debes completar el campo de nombre'),
    check('email').isEmail().withMessage('Debes completar un email válido'),
    

];




/* /usuarios */
router
.get("/ingreso", validateCreateForm, login)
.post('/ingreso', processLogin)
.get("/registro", register)

.get('/salir',logout)
.post("/registro" ,validateCreateForm , logDBMiddleware ,processRegister)
.get("/perfil", perfil)
module.exports = router;  
