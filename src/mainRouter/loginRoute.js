const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const loginCont = require('../mainController/loginCont');

const validationsLogin = [
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('password').notEmpty().withMessage('Escriba una contraseña'),
]

router.post('/login', validationsLogin ,loginCont.validLogin); 

router.get('/profile/:userId', loginCont.profile) // perfil

module.exports = router;
