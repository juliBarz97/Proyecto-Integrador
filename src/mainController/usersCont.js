const {validationResult} = require('express-validator')
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const controlador = {	
    register: (req, res) => {		
        return res.render("users/register");    
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
    
    
    registrarUsuario: ( req, res ) => {
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
			nombre_completo: req.body.nombre_completo,
			email: req.body.email,
            date : req.body.date,
            domicilio : req.body.domicilio,
			perfil: req.body.perfil,
			interes : req.body.interes,
			password: bcrypt.hashSync(req.body.password, 10),
			avatar: req.body.avatar  
		}

		userDB.push(newUser);

		fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, " "));

		return res.redirect("login");
    },
    validarUsuario: (req, res) => {
        const userToLogin = userDB.find(oneUser => oneUser.email === req.body.email);

		if (userToLogin === undefined) {
			return res.send("No existe el usuario");
		}

		if (userToLogin !== undefined) {
			const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
			
			if (!isPasswordOk) {
				return res.send("Las contraseñas no coinciden");
			}

			delete userToLogin.password;
			req.session.user = userToLogin;

			return res.redirect("/index");
    }
},
    login: (req, res) => {
        res.render("users/login");
},
    profile: (req, res) => {
        res.render("users/profile");
}
}


module.exports = controlador;