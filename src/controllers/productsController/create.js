const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req, res) => {
  const {
    name,
    marca,
    material,
    description,
    precio,
    producto,
    mainImage,
    images,
    category,
    cantidad,
    tamanio,
    capacidad,
    descuento,
  } = req.body;

  const newProduct = new Product(
    name,
    marca,
    material,
    description,
    precio,
    producto,
    mainImage,
    images,
    category,
    cantidad,
    tamanio,
    capacidad,
    descuento
  );

  const products = leerJSON("products");

  products.push(newProduct);

  escribirJSON(products, "products");

  return res.redirect("/admin");
};
