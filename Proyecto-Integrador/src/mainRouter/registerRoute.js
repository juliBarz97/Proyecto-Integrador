const express = require('express');
const router = express.Router();


const registerCont = require('../controllers/registerCont');

router.get('/', registerCont.index); 


module.exports = router;
