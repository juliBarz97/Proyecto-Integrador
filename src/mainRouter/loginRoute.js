const express = require('express');
const router = express.Router();


const loginCont = require('../mainController/loginCont');

router.get('/', loginCont.login); 

router.post('/login', loginCont.validarUsuario); 


module.exports = router;
