const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

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
			const lastUser = userDB[userDB.length - 1];

			if(lastUser !== undefined) {
				const lastID = lastUser.id;
                return lastID + 1;
			}

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

		userDB.push(newUser);

		fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, " "));

		return res.redirect("users/login");
    },
        
    login: (req, res) => {
        res.render("users/login");
    },
    
    profile: (req, res) => {
        res.render("users/profile");
    },

    validLogin: (req, res) => {
        const resultValidationLogin = validationResult(req);
        
        if (resultValidationLogin.errors.length > 0 ){
            return res.render('users/login', {
                errors: resultValidationLogin.mapped(),
                oldData : req.body })
        }

		const userToLogin = userDB.find(oneUser => oneUser.email === req.body.email);

		if (userToLogin === undefined) {
            return res.render( 'users/login' );
		}

		if (userToLogin !== undefined) {
			const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
			
			if (!isPasswordOk) {
				return res.render( 'users/login' );
			}

			delete userToLogin.password;
			req.session.user = userToLogin;

			return res.redirect("/");
		}
    },
}


module.exports = controlador;