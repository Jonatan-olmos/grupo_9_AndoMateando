const express = require("express");
const {
  getAllProducts,
  getOneProduct,
} = require("../controllers/apis/productsApiController");
const {
  getAllUsuarios,
  getOneUsuarios,
} = require("../controllers/apis/usuariosApiController");
const router = express.Router();

/* /apis */
router.get("/products", getAllProducts);
router.get("/products/:id", getOneProduct);
router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id",getOneUsuarios );



module.exports = router;
