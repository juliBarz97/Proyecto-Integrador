const db = require('../database/models');

const controlador = {	
    home: (req, res) => {
        let lista =  db.producto.findAll();
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
