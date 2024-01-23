const express = require("express");
const {
  index,
  cart,
  mateartips,
  preguntas_frecuentres,
  contacto,
  admin,
  searchAdmin,
  searchAdmin2,
  todos_los_productos2,
 

} = require("../controllers/indexController");
const checkAdmin = require('../middlewares/checkAdmin');
const router = express.Router();

/* GET home page. */
router

  .get("/", index)
  .get('/productos/todos_productos/buscar', searchAdmin2)
  .get("/carrito", cart)
  .get("/mateartips", mateartips)
  .get("/contacto", contacto)
  .get("/preguntas_frecuentes", preguntas_frecuentres)
  .get("/admin", admin)
  .get('/admin/productos/buscar', searchAdmin)
  .get("/todos_productos2", todos_los_productos2)
module.exports = router;
