"use strict";

const productsJSON = require("../../data/products.json");

const productDB = productsJSON.map((product, index) => {
  return {
    name: product.name,
    description: product.description,
    price: product.precio,
    discount: product.descuento,
    image: product.mainImage,
    quantityInStock: product.cantidad,
    brand: product.marca,
    tamanio: product.tamanio,
    color: product.color,
   
    categoryId: product.category == "elegante" ? 1 : 2,
    typeproductsId: product.producto == "mate" ? 1 : product.producto == "termo" ? 2 : product.producto == "yerbero" ? 3 : product.producto == "bombilla" ? 4 : product.producto == "combo" ? 5 : 6,    compatibilitieId: product.capacidad == "250 ML" ? 1 : product.capacidad == "350 ML" ? 2 : product.capacidad == "400 ML" ? 3 : product.capacidad == "500 ML" ? 4 : product.capacidad == " 650 ML" ? 5 : product.capacidad == "750 ML" ? 6 : product.capacidad == "1 L" ? 7 : product.capacidad == "1.2 L" ? 8 : product.capacidad == "1.5 L" ? 9 : product.capacidad == "100 g" ? 10 : product.capacidad == "150 g" ? 11 :product.capacidad == "250 g" ? 12 : product.capacidad == "300 g" ? 13 : 14 ,
    materialsId: product.material == "Madera" ? 1 : product.material == "Plastico" ? 2 : product.material == "Metal" ? 3 : product.material == "Aluminio" ? 4 : product.material == "vidrio" ? 5 : product.material == "Hierbas" ? 6 : product.material == "Tela" ? 7 :8 ,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", productDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
