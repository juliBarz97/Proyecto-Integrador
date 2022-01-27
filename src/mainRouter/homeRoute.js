const express = require('express');
const router = express.Router();


const homeCont = require('../mainController/homeCont');

router.get('/', homeCont.home); 


module.exports = router;
