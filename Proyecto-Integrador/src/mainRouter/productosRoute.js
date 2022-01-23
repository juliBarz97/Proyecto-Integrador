// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productosCont = require('../mainController/productosCont');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productosCont.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productosCont.create); 
router.post('/create', productosCont.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productosCont.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productosCont.edit); 
router.put('/edit/:id', productosCont.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productosCont.destroy); 


module.exports = router;