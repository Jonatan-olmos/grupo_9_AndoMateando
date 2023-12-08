const express = require('express');
const { detail, mate, mates_personalizados, set_yerbero, super_combos, termos, add } = require('../controllers/productscontroller');

const router = express.Router();

/* /productos */

router
  .get('/detalle', detail)
  .get('/mate', mate)
  .get('/mates_personalizados', mates_personalizados)
  .get('/set_yerbero', set_yerbero)
  .get('/super_combos', super_combos)
  .get('/termos', termos)
  .get('/agregar', add)

module.exports = router;