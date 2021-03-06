const express = require('express');
const router = express.Router();

const path = require('path');

const { body } = require('express-validator');
const validations = require('../middlewares/ValidationsU')
const mult = require('../middlewares/multer')

const usersCont = require('../mainController/usersCont');

const usersLogin = require('../mainController/loginCont');

router.get('/register', usersCont.register); // form registro

router.post('/register',  mult.single('avatar'), validations,  usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 
router.post('/login', usersCont.validLogin); 

router.get('/logout', usersCont.logout) ;

router.get('/api',usersCont.apiUsers) ; //api
router.get('/lastUser',usersCont.lastUser) ; // ult usuario api

router.get('/profile/:userId', usersCont.profile)  //perfil

router.get('*', usersCont.noFound)

module.exports = router;
