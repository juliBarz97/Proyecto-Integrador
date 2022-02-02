const controlador = {	
    home: (req, res) => {
        res.render("home");
},
    carrito:(req, res) => {		
        res.render("Carrito");    
},
    index: (req, res) => {
        res.render("index");
}
}


//un rutador y un controlador para c/u

module.exports = controlador;