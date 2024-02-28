const { validationResult } = require("express-validator");
const fs = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const image = req.files.mainImage;
    const images = req.files.images;
    const { typeproductsId, name, materialsId, brand, categoryId, price, color, quantityInStock, compatibilitieId, tamanio, discount, description } = req.body;

    db.Products.create({
      typeproductsId,
      name, 
      brand,
      categoryId,
      materialsId,
      price,
      color,
      quantityInStock,
      tamanio,
      discount,   
    image : image ? image[0].filename : null,
    compatibilitieId,
      description,
  
    
    })
    .then(newProduct => {
            
      this.images = images ? images.map(image => image.filename) : [];
      if(images){
          
          const imagesDB = images.map(image => {
              return {
                  name : image.filename,
                  id_product : newProduct.id
              }
          })
          db.Image.bulkCreate(imagesDB, {
              validate : true
          }).then(result => {
              console.log(result);
              return res.redirect("/admin")
          })
      }else{
          return res.redirect("/admin")
      }
  })
  .catch(error => console.log(error))
}else{
  if (mainImage){
  fs.existsSync(`public/images/products/${mainImage[0].filename}`) &&
  fs.unlinkSync(`public/images/products/${mainImage[0].filename}`);
  }
  if (images){
      images.forEach((image) => {
          fs.existsSync(`public/images/products/${image}`) &&
          fs.unlinkSync(`public/images/products/${image}`);
          
      });
  }


  db.Category.findAll({
    order: [['name']]
  })
    .then(categories => {
      return res.render("products/product-add", {
        errors: errors.mapped(),
        old: req.body,
        categories,
      });
    })
    .catch(error => console.log(error))

    db.Material.findAll({
      order: [['name']]
    })
      .then(materiales => {
        return res.render("products/product-add", {
          errors: errors.mapped(),
          old: req.body,
          materiales,
        });
      })
      .catch(error => console.log(error))
      db.Capabilitie.findAll({
        order: [['name']]
      })
        .then(compatibilities => {
          return res.render("products/product-add", {
            errors: errors.mapped(),
            old: req.body,
            compatibilities,
          });
        })
        .catch(error => console.log(error))
      db.Typeproducts.findAll({
        order: [['name']]
      })
        .then(typeproductes => {
          return res.render("products/product-add", {
            errors: errors.mapped(),
            old: req.body,
            typeproductes,
          });
        })
        .catch(error => console.log(error))
}
}