const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const controlador = {	
    register: (req, res) => {		
        res.render("register");
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
			fullName: req.body.fullName,
			password: bcrypt.hashSync(req.body.password, 10),
			email: req.body.email,
		}

		userDB.push(newUser);

		fs.writeFileSync(userDBPath, JSON.stringify(userDB, null, " "));

		return res.redirect("login");
    }
}

//un rutador y un controlador para c/u

module.exports = controlador;