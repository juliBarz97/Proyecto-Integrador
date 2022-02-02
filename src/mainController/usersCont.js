const controlador = {	
    register: (req, res) => {		
        res.render("users/register");    
},  
    login: (req, res) => {
        res.render("users/login");
}
}
//un rutador y un controlador para c/u

module.exports = controlador;