const {check,body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
        check('typeproductsId')
        .notEmpty().withMessage('El tipod de producto es obligatorio'),
    check('categoryId')
        .notEmpty().withMessage('La categoría es requerida'),
    check('price')
        .notEmpty().withMessage('El precio es requerido'),  
    check('quantityInStock')
        .notEmpty().withMessage('la cantidad disponible es necesaria'),
        check('compatibilitieId')
        .notEmpty().withMessage('La compacidad es requerida'),
        check('brand')
        .notEmpty().withMessage('La marca es requerida'),
        check('tamanio')
        .notEmpty().withMessage('La tamaño es requerida'),
        check('color')
        .notEmpty().withMessage('El color es requerida'),
        check('discount')
        .notEmpty().withMessage('El descuento es requerida'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres')
]