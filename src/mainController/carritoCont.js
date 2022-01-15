const controlador = {	
    home: (req, res) => {
        res.send("home");
},
    carrito: (req, res) => {		
        res.send("Carrito");    
}, 
    login: (req, res) => {
        res.send("login");
},
    register: (req, res) => {		
        res.send("register");    
}, 
    index: (req, res) => {
        res.send("index");
}
}

//un rutador y un controlador para c/u

module.exports = controlador;
