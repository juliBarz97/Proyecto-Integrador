const express = require('express');
const router = express.Router();


const homeCont = require('../mainController/homeCont');

router.get('/', homeCont.home);
router.get('/Carrito', homeCont.carrito); 
router.get('/index', homeCont.index); 

module.exports = router;
