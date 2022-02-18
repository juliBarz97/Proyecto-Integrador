const express = require('express');
const router = express.Router();

const path = require('path');

const { body } = require('express-validator');
const validations = require('../middlewares/ValidationsU')
const mult = require('../middlewares/multer')
//const guestMiddleware = require('../middlewares/guestMiddleware')

const usersCont = require('../mainController/usersCont');


const validationsLogin = [
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('password').notEmpty().withMessage('Escriba una contraseña'),
]

router.get('/register', usersCont.register); // form registro

router.post('/register', mult.single('avatar'), validations , usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 

router.get('/profile', usersCont.profile);

router.post('/login', validationsLogin, usersCont.validLogin); // Validar usuario 

// desloguearse

router.get('/logout', usersCont.logout)

module.exports = router;
