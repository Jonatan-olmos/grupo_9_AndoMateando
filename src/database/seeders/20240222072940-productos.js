"use strict";

const productsJSON = require("../../data/products.json");

const productDB = productsJSON.map((product, index) => {
  return {
    name: product.name,
    description: product.description,
    price: product.precio,
    discount: product.descuento,
    quantityInStock: 5,
    categoryId: product.category == "elegante" ? 1 : 2,
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
