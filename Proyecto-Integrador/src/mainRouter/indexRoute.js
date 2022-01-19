const express = require('express');
const router = express.Router();


const indexCont = require('../controllers/indexCont');

router.get('/', indexCont.index); 


module.exports = router;
