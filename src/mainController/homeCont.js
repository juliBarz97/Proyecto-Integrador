const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../mainData/productos.json');
let lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {	
    home: (req, res) => {
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("home",{p: lista});
},
    carrito:(req, res) => {		
        res.render("Carrito");    
},
    index: (req, res) => {
        res.render("index");
}
}


module.exports = controlador;