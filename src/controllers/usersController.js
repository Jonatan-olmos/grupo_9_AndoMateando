const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const { leerJSON, escribirJSON } = require("../data");
const usuarioFilePath = path.join(__dirname, "../data/usuarios.json");
const usuarios = JSON.parse(fs.readFileSync(usuarioFilePath, "utf-8"));

const User = require("../data/User");

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    const { nombre, email, password } = req.body;

    if (errors.isEmpty()) {
      const users = leerJSON("usuarios");
      const newUser = new User(nombre, email, password);

      users.push(newUser);

      escribirJSON(users, "usuarios");
      return res.redirect("/usuarios/ingreso");
    } else {
      return res.render("users/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }

    return res.send(errors);
  },

  login: (req, res) => {
    return res.render("users/login");
  },
  processLogin: (req, res) => {},

  /*  createUser: (req, res) => {
    const lastID =usuarios[usuarios.length -1].id;
		const {nombre, telefono,email,contraseña} = req.body;

		const newUsuario = {
			id: lastID +1,
		  nombre: nombre.trim(),
			telefono: telefono.trim(),
			email: email.trim(),
			contraseña: contraseña.trim(),
		
			
		};

		usuarios.push(newUsuario)
		fs.writeFileSync(usuarioFilePath, JSON.stringify(usuarios), 'utf-8')
		
		return res.redirect("/register");

  }, */
};
