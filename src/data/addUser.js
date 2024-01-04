const crypto = require("crypto");

function AddUser(nombre, email, telefono, contraseña) {
  this.id = crypto.randomBytes(8).toString("hex"); // Generar un ID único
  this.nombre = nombre.trim();
  this.email = email.trim();
  this.telefono = telefono.trim();
  this.contraseña = contraseña.trim();
}

module.exports = AddUser;
