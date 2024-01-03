const { leerJSON, escribirJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs')

module.exports = (req,res) => {

    const {name, category,tamanio,description,descuento,marca,material,producto,precio,color,cantidad,capacidad} = req.body;

    const {id} = req.params

    const products = leerJSON('products');

    const produtsUpdated = products.map(product => {
        if(product.id == id){
            (req.file && existsSync('public/images/productos' + product.mainImage)) && unlinkSync('public/images/productos' + product.mainImage)


            product.name = name.trim();
            product.marca = marca;
            product.description = description.trim();
            product.material = material;
            product.producto = producto;
            product.precio = precio.trim();
            product.color = color;
            product.cantidad = cantidad.trim();
            product.tamanio = tamanio;
            product.capacidad = capacidad;
            product.descuento = descuento;
            product.mainImage = req.file ? req.file.filename : product.mainImage;
            product.images = [];
            product.category = category;



        }
        return product
    });



    escribirJSON(produtsUpdated, 'products')

    return res.redirect('/admin')


}