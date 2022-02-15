const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

const multerDiskStorage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imagenes/avatars') 
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + path.extname(file.originalname); //chequear esto 
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage: multerDiskStorage });

const usersCont = require('../mainController/usersCont');

const validations =[
    body('nombre_completo').notEmpty().withMessage('Escriba un nombre'),
    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    body('date').notEmpty().withMessage('Escriba una fecha'),
    body('domicilio').notEmpty().withMessage('Escriba un domicilio'),
    body('avatar').custom((value,{req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg' , '.png'];
        let fileExtensions = path.extname(file.originalname);
        if (!file) {
            throw new Error('Suba una imagen');
        } else { 
            if (acceptedExtensions.includes(fileExtensions) === false){
                throw new Error('Los archivos permitidos son: ' + acceptedExtensions.join())
            }
        };    
        return true; 
    }), 
    body('password').notEmpty().withMessage('Escriba una contraseña'),
    
]

const validationsLogin = [
    body('email').notEmpty().withMessage('Escriba un email').bail(),
    body('contraseña').notEmpty().withMessage('Escriba una contraseña'),
]

router.get('/register', usersCont.register); // form registro

router.post('/register', uploadFile.single('avatar'), validations, usersCont.processRegister); //procesar registro

router.get('/login', usersCont.login); // form login 

router.post('/login', validationsLogin, usersCont.validLogin); // Validar usuario 

router.get('/profile/:userId', usersCont.profile) // perfil

module.exports = router;
