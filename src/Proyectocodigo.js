const express = require('express');
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();

const usuarioLogeadoMW = require('../src/middlewares/usuarioLogeado');

const methodOverride = require('method-override');

app.use(
	session({
		secret: 'Inicio de session',
		resave: false,
		saveUninitialized: false,
	})
);

app.use(cookies());

app.use(usuarioLogeadoMW);

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
// Implementacion de rutas

const rutasHome = require('./mainRouter/homeRoute');
const rutasUsers = require('./mainRouter/usersRoute');
const rutasProducto = require('./mainRouter/productosRoute');

app.use('/', rutasHome);
app.use('/products', rutasProducto);
app.use('/users', rutasUsers);

app.use('/public/', express.static(__dirname + '../../public/'));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use('*', rutasUsers)

app.listen(process.env.PORT || 3000, () => console.log('Hola'));



