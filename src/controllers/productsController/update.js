const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
    const errors = validationResult(req);
  
    if (errors.isEmpty()) {
      const image = req.files.mainImage;
      const images = req.files.images;
      const { name,  brand,  price, color, quantityInStock, compatibilitieId, tamanio, discount, description } = req.body;
  
      db.Products.create({
      name, 
      description,
      price,
      discount,   
      quantityInStock,
      brand,
      tamanio,
      color,
      image : image ? image[0].filename : null,
    
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
  
  
  
  }
  }



