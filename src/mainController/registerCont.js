/*const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const controlador = {	
    register: (req, res) => {		
        return res.render("register");
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
			password: bcrypt.hashSync(req.body.password, 10),
			email: req.body.email,
			perfil: req.body.perfil,
			date : req.body.date,
			domicilio : req.body.date,
			interes : req.body.interes,
			avatar: req.body.avatar  
		}

		userDB.push(newUser);

		fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, " "));

		return res.redirect("login");
    }
}


module.exports = controlador; */