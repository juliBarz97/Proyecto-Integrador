

const { body } = require('express-validator');


const validationsL = [
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('password').notEmpty().withMessage('Escriba una contraseña'),
]

module.exports = validationsL;