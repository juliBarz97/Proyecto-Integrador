const express = require('express')
const path = require('path')
const session = require('express-session');

const app = express();
const methodOverride = require('method-override');

<<<<<<< HEAD
// Seteamos la sesión
app.use(session({
	secret: "Inicio de session",
	resave: true,
	saveUninitialized: false,
}));
=======
app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
>>>>>>> a3c251dbea4a32c0f80a78ff2310a5a947326a53

// Implementacion de rutas

const rutasHome = require('./mainRouter/homeRoute')
const rutasUsers = require('./mainRouter/usersRoute')
const rutasProducto = require('./mainRouter/productosRoute')

app.use('/', rutasHome)
app.use('/products', rutasProducto)
app.use('/users', rutasUsers)


app.use('/public/', express.static(__dirname + '../../public/'))

app.set("view engine", "ejs")

app.set('views','./src/views')

app.listen(process.env.PORT || 3000, () => console.log("Hola"));
