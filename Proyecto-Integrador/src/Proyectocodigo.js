const express = require('express')
const path = require('path')
const app = express();

app.use('/public/', express.static(__dirname + '/public/'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const rutasCarrito = require('./mainRouter/carritoRoute')
const homeRoute = require('./mainRouter/homeRoute')
const indexRoute = require('./mainRouter/indexRoute')
const loginRoute = require('./mainRouter/loginRoute')
const registerRoute = require('./mainRouter/registerRoute')

app.use('/carrito', rutasCarrito)
app.use('/home', homeRoute)
app.use('/index', indexRoute)
app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.use('/public/', express.static(__dirname + '/public/'))


app.listen(process.env.PORT || 3000, () => console.log("Hola"));

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



module.exports = app;



