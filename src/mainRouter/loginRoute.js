const express = require('express');
const router = express.Router();


const loginCont = require('../mainController/loginCont');

router.get('/users/', loginCont.login); 


module.exports = router;
