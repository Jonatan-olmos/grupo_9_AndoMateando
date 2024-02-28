const db = require('../../database/models')

module.exports = (req,res) => {

    const {id} = req.params;

   
    const categories = db.Category.findAll({
        order: [['name']]
    })
       
}