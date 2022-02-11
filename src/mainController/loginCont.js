const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const controlador = {	 
    login: (req, res) => {
        res.render("login");
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
    }
}

//un rutador y un controlador para c/u

module.exports = controlador;