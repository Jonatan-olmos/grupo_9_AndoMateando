"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Products.belongsTo(models.Typeproducts, {
        as: "typeproducts",
        foreignKey: "typeproductsId",
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      cantidad: DataTypes.STRING,
      capacidad: DataTypes.STRING,
      marca: DataTypes.STRING,
      tamanio: DataTypes.STRING,
      material: DataTypes.STRING,
      mainImage: DataTypes.STRING,
      quantityInStock: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      typeproductsId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
