const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imagenes/avatars') 
    },
    filename: (req, file, cb) => {
        let fileName= '${Date.now()}_img${path.extname(file.originalname)}'; //chequear esto 
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });

const usersCont = require('../mainController/usersCont');

const validations = [
    body('nombre_completo').notEmpty().withMessage('Escriba un nombre'),
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('fecha').notEmpty().withMessage('Escriba una fecha'),
    body('domicilio').notEmpty().withMessage('Escriba un domicilio'),
    body('avatar').custom((valur,{req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg' , '.png'];
        let fileExtensions = path.extname(file.originalname);
        if (!file) {
            throw new Error('Suba una imagen');
        } else { 
            if (acceptedExtensions.includes(fileExtensions)){
                throw new Error('Los archivos permitidos son ${acceptedExtensions.join(', ')}')
            }
        };    
        return true; 
    }), 
    body('contraseña').notEmpty().withMessage('Escriba una contraseña'),
    body('confirmacion').notEmpty().withMessage('Reescriba la contraseña'),
]

router.get('/register', usersCont.register); // form registro

router.post('/register', uploadFile.single('avatar'), validations , usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 

router.get('/profile/:userId', usersCont.profile) // perfil

module.exports = router;
