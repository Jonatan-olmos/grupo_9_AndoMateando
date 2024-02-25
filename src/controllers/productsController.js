const fs = require("fs");
const path = require("path");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsFilePath2 = path.join(
  __dirname,
  "../data/productsarmatuequipo.json"
);
const productsarmatuequipos = JSON.parse(
  fs.readFileSync(productsFilePath2, "utf-8")
);
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require("../database/models");

const controller = {
  todos_los_productos: (req, res) => {
    db.Products.findAll(
      //{include : ['typeproducts'] }
      )
    
      .then((products) => {
        return res.render("products/productos", {
          products,
          toThousand,
        });
      })
      .catch((error) => console.log(error));
  },

  detail: (req, res) => {
    const product = products.find((product) => product.id === +req.params.id);
    return res.render("products/detail", {
      ...product,
      toThousand,
    });
  },

  mate: (req, res) => {
    db.Products.findAll(
     // {include : ['typeproducts'] }
      )
    
      .then((products) => {
        return res.render("products/mate", {
          products,
          toThousand,
        });
      })
      .catch((error) => console.log(error)); 
    
  },
  mates_personalizados: (req, res) => {
    return res.render("products/mates_personalizados");
  },
  set_yerbero: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/set_yerbero", {
           products,
           toThousand,
         });
       })
       .catch((error) => console.log(error)); 
    
  },

  super_combos: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/super_combos", {
           products,
           toThousand,
         });
       })
       .catch((error) => console.log(error)); 
  },

  termos: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/termos", {
           products,
           toThousand,
         });
       })
       .catch((error) => console.log(error)); 
  
  },

  arma_tu_equipo: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
   
  },

  arma_tu_equipo2: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo2", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },

  arma_tu_equipo3: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo3", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
    
  },
  arma_tu_equipo4: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo4", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },
  arma_tu_equipo5: (req, res) => {
    db.Products.findAll(
      // {include : ['typeproducts'] }
       )
     
       .then((products) => {
         return res.render("products/arma_tu_equipo5", {
           products,
           toThousand,
           productsarmatuequipos,
         });
       })
       .catch((error) => console.log(error)); 
    
  },
};
module.exports = controller;
