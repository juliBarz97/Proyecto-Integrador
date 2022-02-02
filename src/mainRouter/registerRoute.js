const express = require('express');
const router = express.Router();


const registerCont = require('../mainController/registerCont');

router.get('/register', registerCont.register); 


module.exports = router;
