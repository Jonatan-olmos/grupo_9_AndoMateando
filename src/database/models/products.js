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
      Products.belongsTo(models.Typeproduct, {
        as: "typeproduct",
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
