const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const loginCont = require('../mainController/loginCont');

const validationsLogin = [
    body('nombre_completo').notEmpty().withMessage('Escriba un nombre_completo').bail(),
    body('contraseña').notEmpty().withMessage('Escriba una contraseña'),
]

router.post('/login', validationsLogin, loginCont.validLogin); // Validar usuario 

module.exports = router;
