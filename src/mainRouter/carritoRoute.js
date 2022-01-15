const express = require('express');
const router = express.Router();


const carritoCont = require('../controllers/carritoCont');

router.get('/', carritoCont.index); 


module.exports = router;
