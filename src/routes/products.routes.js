const express = require("express");
const {
  add,
  edit,
  create,
  update,
  remove,
} = require("../controllers/productsController/");
const upload = require("../middlewares/upload");
const productAddValidator = require("../validations/product-add-validator");
const productEditValidator = require("../validations/product-edit-validator");
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
} = require("../controllers/productsController");

/* /productos */

router

  .get("/arma_tu_equipo", arma_tu_equipo)

  .get("/arma_tu_equipo2", arma_tu_equipo2)

  .get("/arma_tu_equipo3", arma_tu_equipo3)
  .get("/arma_tu_equipo4", arma_tu_equipo4)
  .get("/arma_tu_equipo5", arma_tu_equipo5)
  .get("/todos_productos", todos_los_productos)

  .get("/detalle/:id", detail)
  .get("/mate", mate)
  .get("/mates_personalizados", mates_personalizados)
  .get("/set_yerbero", set_yerbero)
  .get("/super_combos", super_combos)
  .get("/termos", termos)

  /*admin*/

  .get("/agregar", add)
  .post(
    "/crear",
    upload.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    create
  )
  .get("/editar/:id", edit)
  .put(
    "/actualizar/:id",
    upload.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    update
  )
  .delete("/eliminar/:id", remove);

module.exports = router;
