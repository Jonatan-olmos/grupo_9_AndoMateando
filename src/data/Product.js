const crypto = require('crypto');

function Product(name,category,tamanio,description,marca,descuento,material,producto,precio,capacidad,cantidad, mainImage) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.marca = marca.trim();
    this.material = material;
    this.description = description.trim();
    this.precio = precio.trim();
    this.producto = producto.trim();
    this.mainImage = req.file ? req.file.filename : product.mainImage;
    this.images = [];
    this.category = category;
    this.color = color;
    this.cantidad = cantidad.trim();
    this.tamanio = tamanio.trim();
    this.capacidad = capacidad;
    this.descuento = descuento;
}

module.exports = Product