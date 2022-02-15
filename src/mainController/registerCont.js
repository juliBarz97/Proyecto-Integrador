const controlador = {	
    register: (req, res) => {		
        return res.render("register");
    },
    
<<<<<<< HEAD
=======
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
>>>>>>> 4c3416da25107f97fb3b91acbe4793dd714be64d
}


module.exports = controlador;