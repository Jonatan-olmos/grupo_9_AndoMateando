const { leerJSON } = require("../data");

module.exports = {
  index: (req, res) => {
    const products = leerJSON("products");

    return res.render("index", {
      products,
    });
  },

  cart: (req, res) => {
    return res.render("productCart");
  },
  mateartips: (req, res) => {
    return res.render("extras/mateartips");
  },
  preguntas_frecuentres: (req, res) => {
    return res.render("extras/preguntas_frecuentes");
  },

  contacto: (req, res) => {
    return res.render("extras/contacto");
  },
  admin: (req, res) => {
    const products = leerJSON("products");

    return res.render("dashboard", {
      products,
    });
  },
};
