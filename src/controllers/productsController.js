const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {
  detail: (req, res) => {
    return res.render("products/detail",
    );
  },
  mate: (req, res) => {
    return res.render("products/mate",
    {
      products,
			toThousand,
    });
  },
  mates_personalizados: (req, res) => {
    return res.render("products/mates_personalizados");
  },
  set_yerbero: (req, res) => {
    return res.render("products/set_yerbero");
  },
  super_combos: (req, res) => {
    return res.render("products/super_combos");
  },
  termos: (req, res) => {
    return res.render("products/termos");
  },
  add: (req, res) => {
    return res.render("products/product-add");
  },
  edit: (req, res) => {
    return res.render("products/product-edit");
  },
};
module.exports = controller;