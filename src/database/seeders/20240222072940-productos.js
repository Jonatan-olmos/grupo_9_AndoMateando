"use strict";

const productsJSON = require("../../data/products.json");

const productDB = productsJSON.map((product, index) => {
  return {
    name: product.name,
    description: product.description,
    price: product.precio,
    discount: product.descuento,
    mainImage: product.mainImage,
    quantityInStock: 5,
    categoryId: product.category == "elegante" ? 1 : 2,
    typeproductsId: product.producto == "mate" ? 1 : product.producto == "termo" ? 2 : product.producto == "yerbero" ? 3 : product.producto == "bombilla" ? 4 : product.producto == "combo" ? 5 : 6,
    brandId: index + 1,
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
