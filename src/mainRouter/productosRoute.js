// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productosCont = require('../mainController/productosCont');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productosCont.index); 
router.get('/listado', productosCont.listado); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/crear', productosCont.create); 
router.post('/crear', productosCont.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productosCont.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar/:id', productosCont.editar); 
router.put('/editar/:id', productosCont.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productosCont.destroy); 


module.exports = router;