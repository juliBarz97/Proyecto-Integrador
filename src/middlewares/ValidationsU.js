
const path = require('path');


const { body } = require('express-validator');

const validations = [
    body('nombre_completo').notEmpty().withMessage('Escriba un nombre'),
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('date').notEmpty().withMessage('Escriba una fecha'),
    body('domicilio').notEmpty().withMessage('Escriba un domicilio'),
    body('avatar').custom((value,{req }) => {
        let file = req.file;
        console.log(req.file)
        let acceptedExtensions = ['.jpg' , '.png', '.jpeg' ];
       
        if (!file) {
            throw new Error('Suba una imagen');
        } else { 
             let fileExtensions = path.extname(file.originalname);
            if (acceptedExtensions.includes(fileExtensions)===false){
                throw new Error('Los archivos permitidos son ' + acceptedExtensions.join(', '))
            }
        };    
        return true; 
    }), 
    body('password').notEmpty().withMessage('Escriba una contraseña'),   
]

module.exports = validations;