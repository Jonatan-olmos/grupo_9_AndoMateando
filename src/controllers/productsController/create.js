const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product2");


module.exports = (req, res) => {




  const {producto, name, material,marca,category,precio,color,cantidad,capacidad,tamanio,descuento,description, 
   } = req.body;
  
   const mainImage = req.file;


  const newProduct = new Product(producto,name,material,marca,category,precio,color,cantidad,capacidad,tamanio,descuento,mainImage, description
    
)

  const products = leerJSON('products');

  products.push(newProduct);
 
  escribirJSON(products, "products");

  return res.redirect("/admin");

  
}