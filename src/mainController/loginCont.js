const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));


const {validationResult} = require('express-validator')


const controlador = {
    login: (req, res) => {
        res.render("login");
    }, 
	validLogin: (req, res) => {
        const resultValidationLogin = validationResult(req);
        
        if (resultValidationLogin.errors.length > 0 ){
			res.render('users/login', {
                errors: resultValidationLogin.mapped(),
                oldData : req.body })
        }
		
		const userToLogin = userDB.filter( function(e){
			return e.email == req.body.email;
		})

		if (userToLogin === undefined) {
            res.render( 'users/login' );
		}

		if (userToLogin !== undefined) {
			const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin[0].password);
			
			if (!isPasswordOk) {
				return res.render( 'users/login' );
			}

			delete userToLogin[0].password;
			req.session.user = userToLogin[0];

			console.log( req.session.user );

			return res.require("index");
		}
	}
}


module.exports = controlador;