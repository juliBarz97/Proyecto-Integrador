const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
//const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
//const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const {validationResult} = require('express-validator')

const controlador = {	
    register: (req, res) => {
				
        res.render("users/register");
    },
    
	profile : (req, res) => {
		res.render("users/profile/:userId");
	},

    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0 ){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData : req.body })
        }
		
		console.log("asdasd: " ,req.body)
		let images = req.file.filename
		db.usuario.create({
			
			nombre: req.body.nombre_completo,
			email: req.body.email,
			fecha: req.body.fecha,
			domicilio: req.body.domicilio,
			image: req.file.filename,
			perfil: req.body.perfil,
			Accesorios: req.body.Accesorios,
			Respuestos: req.body.Respuestos,
			Soporte: req.body.Soporte,
			Ortopedicos: req.body.Ortopedicos,
			password: bcrypt.hashSync(req.body.password, 10)
			
		})


		return res.redirect("login");
    },
        
    login: (req, res) => {
		console.log(req.cookies.test)
        res.render("users/login");
    },

	logout: (req,res) => {
		req.session.destroy();
		return res.redirect('/')
	},

    validLogin: (req, res) => {
		
		const resultValidationLogin = validationResult(req);
		
		if (resultValidationLogin.errors.length > 0 ){
			 res.render('users/login', {
				 errors: resultValidationLogin.mapped(),
				 oldData : req.body })
				}
		 

		db.usuario.findOne({where: {email: req.body.email }}).then( (userToLogin) => {
			if (!userToLogin) {
				return	res.render( 'users/login' );
			}
			
			if (userToLogin) {
				const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
				
				if (!isPasswordOk) {
					return res.render( 'users/login' );
				} else {			 
				   delete userToLogin.password; //no borra, habria que reveerlo 
				   req.session.userLogged = userToLogin;
	
				   return res.redirect('/')
			   }
			}
		});
		

	}
}

module.exports = controlador;