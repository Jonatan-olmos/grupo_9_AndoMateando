const crypto = require("crypto");

function Product(
  cantidad,
  capacidad,
  category,
  description,
  descuento,
  id,
  images,
  mainImage,
  marca,
  material,
  name,
  precio,
  producto,
  tamanio
) {
  this.cantidad = cantidad.trim();
  this.capacidad = capacidad;
  this.category = category;
  this.description = description.trim();
  this.descuento = descuento;
  this.id = id;
  this.images = images;
  this.mainImage = mainImage;
  this.marca = marca.trim();
  this.material = material;
  this.name = name.trim();
  this.precio = precio.trim();
  this.producto = producto.trim();
  this.tamanio = tamanio.trim();
}

module.exports = Product;
