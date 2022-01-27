const express = require('express');
const router = express.Router();


const carritoCont = require('../mainController/carritoCont');

router.get('/', carritoCont.carrito); 


module.exports = router;
