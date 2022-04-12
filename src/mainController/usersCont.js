const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');


const {validationResult} = require('express-validator')

const controlador = {	
    register: (req, res) => {
				
        res.render("users/register");
    },
    
	profile : (req, res) => {
		db.usuario.findOne({ where: { id: req.session.userLogged } }).then((username) => {
			let lista = [];

			let usuario = {
				id: username.id,
				nombre: username.nombre,
				descripcion: username.email,
				precio: username.domicilio,
			};

			lista.push(usuario);

			console.log(lista);

			res.render('users/profile/', { user: lista });
		});
		
	//	res.render("users/profile/:userId");
	},

    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0 ){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData : req.body })
        }
		
		console.log("Pasaste por processRegister: " ,req.body)
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

	apiUsers : (req, res ) => {
		db.usuario.findAll()
		.then(unUsuario => {

			let lista = [];

			for (userrs of unUsuario) {
				let usuarios = {
					nombre: userrs.nombre,
					email: userrs.email,
					domicilio: userrs.domicilio,
	
				};
			lista.push(usuarios);

			}


			console.log(unUsuario)
			return res.status(200).json({
				registro: lista.length,
				data: lista,
				codigo : 200,	
			})
	
		});
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