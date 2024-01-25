const { validationResult } = require("express-validator");
const User = require("../data/User");
const { leerJSON, escribirJSON } = require("../data");

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    const { name, surname, email, password } = req.body;

    if (errors.isEmpty()) {
      const users = leerJSON("users");
      const newUser = new User(name, surname, email, password);
      users.push(newUser);

      escribirJSON(users, "users");

      return res.redirect("/usuarios/ingreso");
    } else {
      return res.render("users/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  login: (req, res) => {
    return res.render("users/login");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
      const { id, name, role } = leerJSON("users").find(
        (user) => user.email === email
      );

      req.session.userLogin = {
        id,
        name,
        role,
      };

      remember &&
        res.cookie("andoMateando_user", req.session.userLogin, {
          maxAge: 1000 * 60 * 2,
        });

      return res.redirect("/");
    } else {
      return res.render("users/login", {
        errors: errors.mapped(),
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("andoMateando_user", null, {
      maxAge: -1,
    });

    return res.redirect("/");
  },
  profile: (req, res) => {
    return res.render("users/profile");
  },
  profileUpload: (req, res) => {
    const errors = validationResult(req);
    const { name, surname } = req.body;
    const { id } = req.params;

    if (errors.isEmpty()) {
      users.forEach((usuario) => {
        if (usuario.id === req.params.id) {
          usuario.name = name ? name.trim() : usuario.name;
          usuario.surname = surname ? surname.trim() : usuario.surname;
        }
      });
      escribirJSON(users, "users");

      return res.redirect("users/profile" + req.params.id);
    } else {
      const user = users.find((user) => user.id === req.params.id);
      return res.render("users/profile", {
        errors: errors.mapped(),
        ...user,
      });
    }
  },
};
