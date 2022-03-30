const path = require('path');


const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Escriba un nombre'),
    body('precio').notEmpty().withMessage('Escriba el precio del producto').bail()
        .isNumeric().withMessage('Ingrese un numero'),
    body('descuento').notEmpty().withMessage('Escriba el descuento del producto').bail()
        .isNumeric().withMessage('Ingrese un numero'),
    body('imageProd').custom((valur,{req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg' , '.png', '.jpeg' ];
        let fileExtensions = path.extname(file.originalname);
        if (!file) {
            throw new Error('Suba una imagen');
        } else { 
            if (acceptedExtensions.includes(fileExtensions)===false){
                throw new Error('Los archivos permitidos son ' + acceptedExtensions.join(', '))
            }
        };    
        return true; 
    }), 
]

module.exports = validations;