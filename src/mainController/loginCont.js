const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const userDBPath = path.resolve(__dirname, "../mainData/usuarios.json");
const userDB = JSON.parse(fs.readFileSync(userDBPath, "utf8"));

const controlador = {
    login: (req, res) => {
        res.render("login");
    },
}

//un rutador y un controlador para c/u

module.exports = controlador;