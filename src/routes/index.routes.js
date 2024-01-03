const express = require("express");
const {
  index,
  cart,
  mateartips,
  preguntas_frecuentres,
  contacto,
  admin,
 

} = require("../controllers/indexController");

const router = express.Router();

/* GET home page. */
router

  .get("/", index)
  .get("/carrito", cart)
  .get("/mateartips", mateartips)
  .get("/contacto", contacto)
  .get("/preguntas_frecuentes", preguntas_frecuentres)
  .get("/admin", admin);

module.exports = router;
