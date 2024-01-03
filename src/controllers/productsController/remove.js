const {existsSync, unlinkSync} = require('fs')
const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

    const {id} = req.params;
    const products = leerJSON('products');

    const {mainImage} = products.find(product => product.id == id);

    existsSync('public/images/productos' + mainImage) && unlinkSync('public/images/productos' + mainImage)

    const productsFiltered = products.filter(product => product.id != id);

    escribirJSON(productsFiltered, 'products');

    return res.redirect('/admin')


}