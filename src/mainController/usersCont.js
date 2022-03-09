const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models/user');
//const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
//const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const {validationResult} = require('express-validator')

const controlador = {	
    register: (req, res) => {
				
        res.render("users/register");
    },
    
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0 ){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData : req.body })
        }

		const generateID = () => {
			/*const lastUser = userDB[userDB.length - 1];

			if(lastUser !== undefined) {
				const lastID = lastUser.id;
                return lastID + 1;
			}*/

			return 1;
		}

		const newUser = {
			id: generateID(),
			nombre: req.body.nombre_completo,
			email: req.body.email,
			fecha: req.body.fecha,
			domicilio: req.body.domicilio,
			perfil: req.body.perfil,
			Accesorios: req.body.Accesorios,
			Respuestos: req.body.Respuestos,
			Soporte: req.body.Soporte,
			Ortopedicos: req.body.Ortopedicos,
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file.filename,
		}

		//userDB.push(newUser);

		//fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, " "));

		return res.redirect("login");
    },
        
    login: (req, res) => {
		console.log(req.cookies.test)
        res.render("users/login");
    },

    validLogin: (req, res) => {
		
		const resultValidationLogin = validationResult(req);
		 
		 if (resultValidationLogin.errors.length > 0 ){
			 res.render('users/login', {
				 errors: resultValidationLogin.mapped(),
				 oldData : req.body })
	 }
		 
		 
		 /*let userToLogin = userDB.filter( function(e){
			 return e.email == req.body.email;
		 })*/
 
		 //console.log(userToLogin[0].password);
		 //console.log(req.body.password);
		 if (!userToLogin) {
			 return	res.render( 'users/login' );
		 }
		 
		 if (userToLogin) {
			 const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin[0].password);
			 
			 if (!isPasswordOk) {
				 return res.render( 'users/login' );
			 } else {			 
				delete userToLogin[0].password; //no borra, habria que reveerlo 
				req.session.userLogged = userToLogin[0];

				if(req.body.recordarUsuario) {
					res.cookie('userEmail', req.body.email , { maxAge : (1000*60)})
				}

				return res.redirect("/users/profile");
			}
	 } },
	 profile: (req, res) => {
		 console.log(req.cookies.userEmail)
		 console.log(req.session.userLogged);
		 res.render("users/profile",{
			 user: req.session.userLogged,
		 });
	
	 },
	 logout: (req,res)=>{
		 req.session.destroy;
		 console.log(req.session.userLogged);
		 return res.redirect('/')
	 }
}



module.exports = controlador;