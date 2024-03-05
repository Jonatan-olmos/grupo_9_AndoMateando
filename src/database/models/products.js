"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.Image, {
        as: "images",
        foreignKey: "productsId",
      });
      Products.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Products.belongsTo(models.Typeproducts, {
        as: "typeproducts",
        foreignKey: "typeproductsId",
      });
      Products.belongsTo(models.Capabilitie, {
        as: "capabilitie",
        foreignKey: "compatibilitieId",
      });
      Products.belongsTo(models.Material, {
        as: "materials",
        foreignKey: "materialsId",
      });
    }
  }
  Products.init(
    {
      name:{  type : DataTypes.STRING,allowNull: false},
      description: { type : DataTypes.TEXT,allowNull: false},
      price:{  type : DataTypes.INTEGER,allowNull: false},
      discount: { type : DataTypes.INTEGER,allowNull: false},
      brand:{  type : DataTypes.STRING,allowNull: false},
      tamanio:{ type :  DataTypes.STRING,allowNull: false},
      color: { type : DataTypes.STRING,allowNull: true},
      image: { type : DataTypes.STRING,allowNull: false},
      quantityInStock:{ type :  DataTypes.STRING,allowNull: false},
      categoryId: { type : DataTypes.INTEGER,allowNull: false},
      typeproductsId: { type : DataTypes.INTEGER,allowNull:false},
      
      compatibilitieId:  {type : DataTypes.INTEGER,allowNull: false},
      materialsId:  {type : DataTypes.INTEGER,allowNull: false},
      
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
