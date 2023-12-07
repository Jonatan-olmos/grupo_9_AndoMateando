module.exports = {
  detail: (req, res) => {
    return res.render("products/detail");
  },
  mate: (req, res) => {
    return res.render("products/mate");
  },
  mates_personalizados: (req, res) => {
    return res.render("products/mates_personalizados");
  },
  set_yerbero: (req, res) => {
    return res.render("products/set_yerbero");
  },
  super_combos: (req, res) => {
    return res.render("products/super_combos");
  },
  termos: (req, res) => {
    return res.render("products/termos");
  },
  add: (req, res) => {
    return res.render("products/product-add");
  },
  edit: (req, res) => {
    return res.render("products/product-edit");
  },
};
