const express = require('express');
const router = express.Router();

const path = require('path');

const { body } = require('express-validator');
const validations = require('../middlewares/ValidationsU')
const mult = require('../middlewares/multer')
//const guestMiddleware = require('../middlewares/guestMiddleware')
const validationsL = require('../middlewares/validationsL')

const usersCont = require('../mainController/usersCont');




router.get('/register', usersCont.register); // form registro

router.post('/register', mult.single('avatar'), validations , usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 

router.get('/profile', usersCont.profile);

router.post('/login', validationsL, usersCont.validLogin); // Validar usuario 


router.get('/logout', usersCont.logout) // desloguearse

module.exports = router;
