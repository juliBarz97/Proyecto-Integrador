const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imagenes') 
    },
    filename: (req, file, cb) => {        
        let fileName= `${Date.now()}_img${path.extname(file.originalname)}`; 
        cb(null, fileName);
        console.log("hola como estas")
        console.log(fileName);
        console.log(file);
    }
})

const uploadFile= multer ({storage});

module.exports = uploadFile;