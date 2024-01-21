const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const usuarioFilePath = path.join(__dirname, "../data/usuarios.json");
const usuarios = JSON.parse(fs.readFileSync(usuarioFilePath, "utf-8"));

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      //registrar el ususario
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
