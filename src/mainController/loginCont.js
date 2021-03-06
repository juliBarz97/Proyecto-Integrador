const db = require('../database/models');
const bcrypt = require('bcryptjs');


const controlador = {	 
    login: (req, res) => {
        res.render("login");
    },

    validarUsuario: (req, res) => {
		const userToLogin = db.usuario.find(oneUser => oneUser.email === req.body.email);

		if (userToLogin === undefined) {
            return res.render( 'users/login' );
		}

		if (userToLogin !== undefined) {
			const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
			
			if (!isPasswordOk) {
				return res.send("Las contraseñas no coinciden");
			}

			delete userToLogin.password;
			req.session.user = userToLogin;

			console.log( req.session );
 
			return res.redirect("/home");
		}
    }
		
    }


//un rutador y un controlador para c/u

module.exports = controlador;
