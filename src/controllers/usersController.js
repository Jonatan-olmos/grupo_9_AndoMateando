const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const usuarioFilePath = path.join(__dirname, '../data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
module.exports = {
  login: (req, res) => {
    return res.render("users/login");
  },
  register: (req, res) => {
    return res.render("users/register");  
  },
  createUser: (req, res) => {
    	const lastID =usuarios[usuarios.length -1].id;

		const errors = validationResult(req);
		if (errors.isEmpty()) {
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
		
		
		} else {
			return res.render("/register", { 
				errors: errors.array(),
				old: req.body
			});
		}
	},
};
