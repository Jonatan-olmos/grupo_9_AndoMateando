const { leerJSON } = require("../data");
const fs = require("fs");
const path = require("path");

const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
  index: (req, res) => {
    console.log(req.session);
    const products = leerJSON("products");

    return res.render("index", {
      products,
    });
  },

  todos_los_productos2: (req, res) => {
    return res.render("products/productos2", {
      products,
      toThousand,
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

  terminos_y_condiciones: (req, res) => {
    return res.render("extras/terminos_y_condiciones");
  },
  admin: (req, res) => {
    db.products
      .findAll()
      .then((products) => {
        //return res.send(products)
        return res.render("dashboard", {
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  searchAdmin: (req, res) => {
    const { keyword } = req.query;

    db.Restaurant.findAll({
      where: {
        name: {
          [Op.substring]: keyword,
        },
      },
      include: ["address", "category"],
    })
      .then((result) => {
        return res.render("dashboard", {
          products: result,
          keyword,
        });
      })
      .catch((error) => console.log(error));
  },
};
