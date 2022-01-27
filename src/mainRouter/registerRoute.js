const express = require('express');
const router = express.Router();


const registerCont = require('../mainController/registerCont');

router.get('/', registerCont.register); 


module.exports = router;
