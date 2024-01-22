const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

function User(nombre, email, telefono, password) {
  this.id = crypto.randomUUID();
  this.nombre = nombre.trim();
  this.email = email.trim();
  this.password = bcryptjs.hashSync(password.trim(), 10);
  this.role = "user";
}

module.exports = User;
