const express = require('express');
const router = express.Router();


const loginCont = require('../controllers/loginCont');

router.get('/', loginCont.index); 


module.exports = router;
