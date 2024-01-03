
const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");


module.exports = (req,res) => {

    


    const {name,category,tamanio,description,marca,descuento,material,producto,precio,capacidad,cantidad, } = req.body;

    const mainImage = req.file;

    const newProduct = new Product(name,category,tamanio,description,marca,descuento,material,producto,precio,capacidad,cantidad, mainImage)
    const products = leerJSON('products');

    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')

}