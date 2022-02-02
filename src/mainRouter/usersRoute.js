const express = require('express');
const router = express.Router();


const usersCont = require('../mainController/usersCont');

router.get('/register', usersCont.register); 
router.get('/login', usersCont.login); 


module.exports = router;
