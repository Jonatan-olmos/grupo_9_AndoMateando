const db = require("../../database/models");

const getAllProducts = async (req, res) => {
  try {
    const { count, rows } = await db.Products.findAndCountAll({
      include: [
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "typeproducts",
          attributes: ["name"],
        },
      ],
      attributes: ["id", "name"],
    });

    const products = rows.map((product) => {
      return {
        ...product.dataValues,
        detail: `${req.protocol}://${req.get("host")}/apis/products/${
          product.id
        }`,
      };
    });

    return res.status(200).json({
      ok: true,
      count,
      products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await db.Products.findByPk(req.params.id, {
      include: [
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "typeproducts",
          attributes: ["name"],
        },
        {
          association: "images",
          attributes: ["file"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "quantityInStock"],
      },
    });

    const productCustom = {
      ...product.dataValues,
      image: `${req.protocol}://${req.get("host")}/images/productos/${
        product.image
      }`,
      category: product.category.name,
      typeproducts: product.typeproducts.name,
    };

    return res.status(200).json({
      ok: true,
      product: productCustom,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
