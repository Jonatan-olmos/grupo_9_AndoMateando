const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsFilePath2 = path.join(__dirname, '../data/productsarmatuequipo.json');
const productsarmatuequipos = JSON.parse(fs.readFileSync(productsFilePath2, 'utf-8'))
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {
  todos_los_productos: (req, res) => {
    return res.render("products/productos",
    {
      products,
			toThousand,
    });

  },
 
  detail: (req, res) => {
    const product = products.find(product => product.id === +req.params.id)
		return res.render('products/detail',{
			...product,
			toThousand,
     
    });
  },
  
  mate: (req, res) => {
    return res.render("products/mate",
    {
      products,
			toThousand,
    });
  },
  mates_personalizados: (req, res) => {
    return res.render("products/mates_personalizados");
  },
  set_yerbero: (req, res) => {
    return res.render("products/set_yerbero",
    {
      products,
			toThousand,
    });
  },
  
  super_combos: (req, res) => {
    return res.render("products/super_combos",
    {
      products,
			toThousand,
    });
    },
  
  
  termos: (req, res) => {
    return res.render("products/termos",
    {
      products,
			toThousand,
    });
  },
 

  arma_tu_equipo: (req, res) => {
    return res.render("products/arma_tu_equipo", { products, productsarmatuequipos, toThousand });
  },



arma_tu_equipo2: (req, res) => {
  return res.render("products/arma_tu_equipo2",
  {
    products,
    productsarmatuequipos,
    toThousand,
  });
},

arma_tu_equipo3: (req, res) => {
  return res.render("products/arma_tu_equipo3",
  {
    products,
    productsarmatuequipos,
    toThousand,
  });
},
arma_tu_equipo4: (req, res) => {
  return res.render("products/arma_tu_equipo4",
  {
    products,
    productsarmatuequipos,
    toThousand,
  });
  
},
arma_tu_equipo5: (req, res) => {
  return res.render("products/arma_tu_equipo5",
  {
    products,
    productsarmatuequipos,
    toThousand,
  });
},



};
module.exports = controller;