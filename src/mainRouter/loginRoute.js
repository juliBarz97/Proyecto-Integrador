const express = require('express');
const router = express.Router();


const loginCont = require('../mainController/loginCont');

router.get('/', loginCont.login); 


module.exports = router;
