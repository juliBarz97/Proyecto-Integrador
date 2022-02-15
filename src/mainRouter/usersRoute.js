const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');
const validations = require('../middlewares/ValidationsU')
const mult = require('../middlewares/multer')
/*
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imagenes/avatars') 
    },
    filename: (req, file, cb) => {
        let fileName= `${Date.now()}_img${path.extname(file.originalname)}`; //chequear esto 
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });*/

const usersCont = require('../mainController/usersCont');


router.get('/register', usersCont.register); // form registro

router.post('/register', mult.single('avatar'), validations , usersCont.registrarUsuario); //procesar registro

router.get('/login', usersCont.login); // form login 

router.get('/profile/:userId', usersCont.profile) // perfil

module.exports = router;
