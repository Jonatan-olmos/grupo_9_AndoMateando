
const db = require('../../database/models');

module.exports = (req, res) => {
  db.Category.findAll({ order: ['name'] })
    .then(categories => {
      db.Material.findAll({ order: ['name'] }) // Obtener todos los materiales
        .then(materiales => {
            db.Capabilitie.findAll({ order: ['name'] }) // Obtener datos de la tabla 4
            .then(compatibilities => {
                db.Typeproducts.findAll({ order: ['name'] }) // Obtener datos de la tabla 4
                .then(typeproductes => {
                  return res.render('products/product-add', { categories, materiales, compatibilities,typeproductes });
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};
/*
const db = require('../../database/models');

module.exports = (req, res) => {
  db.Category.findAll({ order: ['name'] })
    .then(categories => {
      db.Material.findAll({ order: ['name'] }) // Obtener todos los materiales
        .then(materials => {
          db.Table2.findAll({ order: ['name'] }) // Obtener datos de la tabla 2
            .then(table2Data => {
              db.Table3.findAll({ order: ['name'] }) // Obtener datos de la tabla 3
                .then(table3Data => {
                  db.Table4.findAll({ order: ['name'] }) // Obtener datos de la tabla 4
                    .then(table4Data => {
                      return res.render('products/product-add', { categories, materials, table2Data, table3Data, table4Data });
                    })
                    .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};*/