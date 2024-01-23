const { leerJSON } = require("../data");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
  index: (req, res) => {
    console.log(req.session);
    const products = leerJSON("products");

    return res.render("index", {
      products,
    });
  },

  cart: (req, res) => {
    return res.render("productCart", {
      products,
      toThousand,
    });
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
  terminos_y_condiciones: (req, res) => {
    return res.render("extras/terminos_y_condiciones");
  },
};
