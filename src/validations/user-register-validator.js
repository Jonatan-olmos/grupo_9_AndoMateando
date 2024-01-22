const { check, body } = require("express-validator");

module.exports = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({
      min: 2,
    })
    .withMessage("Minimo dos caracteres")
    .bail()
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("Solo caracteres alfabeticos"),
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El email tiene un formato inválido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("La contraseña debe tener entre 6 y 12 caracteres"),
  body("password2")
    .notEmpty()
    .withMessage(" verificar la contraseña ")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        return false;
      }
      return true;
    })
    .withMessage("Las contraseñas no coinciden"),
  check("remember")
    .notEmpty()
    .withMessage("Debes aceptar los términos y condiciones"),
];
