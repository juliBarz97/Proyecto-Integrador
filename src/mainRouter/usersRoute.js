const express = require('express');
const router = express.Router();

const path = require('path');

const { body } = require('express-validator');
const validations = require('../middlewares/ValidationsU')
const mult = require('../middlewares/multer')


const usersCont = require('../mainController/usersCont');


const validationsLogin = [
    body('email').notEmpty().withMessage('Escriba un email').bail(),
    body('contraseña').notEmpty().withMessage('Escriba una contraseña'),
]

router.get('/register', usersCont.register); // form registro

router.post('/register', mult.single('avatar'), validations , usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 

router.post('/login', validationsLogin, usersCont.validLogin); // Validar usuario 

router.get('/profile/:userId', usersCont.profile) // perfil

module.exports = router;
