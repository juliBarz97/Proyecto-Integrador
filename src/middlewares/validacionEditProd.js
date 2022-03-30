const path = require('path');


const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Escriba un nombre'),
    body('precio').notEmpty().withMessage('Escriba el precio del producto').bail()
        .isNumeric().withMessage('Ingrese un numero'),
    body('descuento').notEmpty().withMessage('Escriba el descuento del producto').bail()
        .isNumeric().withMessage('Ingrese un numero'),
    body('descripcion').notEmpty().withMessage('Escriba una descripcion para el producto')
]

module.exports = validations;
