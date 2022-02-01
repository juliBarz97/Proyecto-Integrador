const express = require('express');
const router = express.Router();


const registerCont = require('../mainController/registerCont');

router.get('/users', registerCont.register); 


module.exports = router;
