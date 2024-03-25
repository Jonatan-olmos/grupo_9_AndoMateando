const db = require("../../database/models");

const getAllUsuarios = async (req, res) => {
  try {
    const { count, rows } = await db.User.findAndCountAll({
      include: [
     
      ],
     
      attributes: ["id", "name", "surname"],
    });

    const user = rows.map((user) => {
      return {
        ...user.dataValues,
        detail: `${req.protocol}://${req.get("host")}/apis/usuarios/${
          user.id
        }`,
      };
    });

    return res.status(200).json({
      ok: true,
     user,

    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

const getOneUsuarios = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id, {
      include: [
    
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    const userCustom = {
      ...user.dataValues,
      
      
    };

    return res.status(200).json({
      ok: true,
      usuario: userCustom,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Error. Sorry!",
    });
  }
};

module.exports = {
  getAllUsuarios,
  getOneUsuarios,
};
