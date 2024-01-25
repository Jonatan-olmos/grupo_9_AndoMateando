const express = require("express");
const {
  index,
  cart,
  mateartips,
  preguntas_frecuentres,
  contacto,
  admin,
  terminos_y_condiciones,
} = require("../controllers/indexController");
const checkAdmin = require("../middlewares/checkAdmin");
const router = express.Router();

/* GET home page. */
router

  .get("/", index)

  .get("/carrito", cart)
  .get("/mateartips", mateartips)
  .get("/contacto", contacto)
  .get("/preguntas_frecuentes", preguntas_frecuentres)
  .get("/admin", checkAdmin, admin)
  /* .get('/admin/productos/buscar' , checkAdmin, searchAdmin) "esta ruta esta comentada porque aun no se desarrollo"*/
  .get("/terminos-y-condiciones", terminos_y_condiciones);

module.exports = router;
