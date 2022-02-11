const {validationResult} = require('express-validator')

const controlador = {	
    register: (req, res) => {		
        res.render("users/register");    
},  
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0 ){
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData : req.body,
            })
        }
        
    },
    login: (req, res) => {
        res.render("users/login");
},
    profile: (req, res) => {
        res.render("users/profile");
}
}
//un rutador y un controlador para c/u

module.exports = controlador;