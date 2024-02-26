"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      mainImage: {
        type: Sequelize.STRING,
      },
      cantidad: {
        type: Sequelize.STRING,
      },
      capacidad: {
        type: Sequelize.STRING,
      },
       marca: {
        type: Sequelize.STRING,
      },
      material: {
        type: Sequelize.STRING,
      },
      tamanio: {
        type: Sequelize.STRING,
      },
      quantityInStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          },
        },
      },
      typeproductsId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Typeproducts",
          },
        },
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Brands",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
