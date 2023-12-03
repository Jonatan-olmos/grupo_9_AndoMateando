module.exports = {
  index : (req,res) => {
      return res.render('index')
  },

  cart : (req,res) => {
      return res.render('productCart')
  },
 mateartips : (req,res) => {
    return res.render('extras/mateartips')
},
preguntas_frecuentres : (req,res) => {
  return res.render('extras/preguntas_frecuentes')
},
contacto : (req,res) => {
  return res.render('extras/contacto')
}
}