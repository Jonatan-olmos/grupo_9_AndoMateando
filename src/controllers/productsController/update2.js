const { leerJSON, escribirJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs')

module.exports = (req,res) => {

    const {producto,name,material,marca,category,precio,color,cantidad,capacidad,tamanio,descuento,description, } = req.body;



    const products = leerJSON('products');

    const produtsUpdated = products.map(product => {
        if(product.id == id){
            (req.file && existsSync('public/images/productos' + product.mainImage)) && unlinkSync('public/images/productos' + product.mainImage)
         
            product.producto = producto;
            product.name = name.trim();
            product.material = material;
            product.marca = marca.trim();
            product.category = category;
            product.precio = precio.trim();
            product.color =color;
            product.cantidad = cantidad.trim();
            product.capacidad =capacidad;
            product.tamanio = tamanio.trim();
            product.descuento = descuento.trim();
            product.mainImage = req.file ? req.file.filename : product.mainImage;
            product.description = description.trim();



           

        }
        return product
    });



    escribirJSON(produtsUpdated, 'products')

    return res.redirect('/admin')


}