const express = require('express');
const {  add, edit, create, update, remove, } = require('../controllers/productsController/');
const upload = require('../middlewares/upload');
const upload2 = require('../middlewares/upload2');
const router = express.Router();

const {
  
  detail,
  mate,
  mates_personalizados,
  set_yerbero,
  super_combos,
  termos,
 
  todos_los_productos,
  arma_tu_equipo,
  arma_tu_equipo2,
  arma_tu_equipo3,
  arma_tu_equipo4,
  arma_tu_equipo5,
 
} = require('../controllers/productsController');
const update2 = require('../controllers/productsController/update2');
/* /productos */

router

.get("/arma_tu_equipo", arma_tu_equipo)

.get("/arma_tu_equipo2", arma_tu_equipo2)

.get("/arma_tu_equipo3", arma_tu_equipo3)
.get("/arma_tu_equipo4", arma_tu_equipo4)
.get("/arma_tu_equipo5", arma_tu_equipo5)
.get("/todos_productos", todos_los_productos)


.get('/detalle/:id', detail)
.get("/mate", mate)
.get("/mates_personalizados", mates_personalizados)
.get("/set_yerbero", set_yerbero)
.get("/super_combos", super_combos)
.get("/termos", termos)

/*addmin*/
  
  .get('/agregar',add)
  .post('/crear',upload2.single('mainImage'), create)
  .get('/editar/:id',edit)
  .put('/actualizar/:id',upload.single('mainImage'),update)
  .delete('/eliminar/:id',remove)




module.exports = router;