const { leerJSON, escribirJSON } = require("../data/usuarios.json");

module.exports = {
  login: (req, res) => {
    return res.render("users/login");
  },
  register: (req, res) => {
    return res.render("users/register");
  },
  createUser: (req, res) => {
    const { nombre, email, telefono, contraseña } = req.body;

    const newUser = {
      nombre: nombre.trim(),
      email: email.trim(),
      telefono: telefono.trim(),
      contraseña: contraseña.trim(),
    };

    const users = leerJSON("usuarios");

    users.push(newUser);

    escribirJSON(users, "usuarios");

    return res.redirect("/carrito");
  },
};
