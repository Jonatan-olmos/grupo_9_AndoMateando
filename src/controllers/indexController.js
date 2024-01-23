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
  searchAdmin2 : (req,res) => {

    const {keyword2} = req.query

    const products = leerJSON('products');

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword2.toLowerCase()) || product.producto.toLowerCase().includes(keyword2.toLowerCase())
    });

    return res.render("/productos/todos_productos2", {
        products : result,
        keyword2
    })
},
todos_los_productos2: (req, res) => {
  return res.render("products/productos2",
  {
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
  admin: (req, res) => {
    const products = leerJSON("products");

    return res.render("dashboard", {
      products,
    });
  },
  searchAdmin : (req,res) => {

    const {keyword} = req.query

    const products = leerJSON('products');

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword.toLowerCase()) || product.producto.toLowerCase().includes(keyword.toLowerCase())
    });

    return res.render("dashboard", {
        products : result,
        keyword
    })
}
};
