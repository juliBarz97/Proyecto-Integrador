const express = require('express')
const path = require('path')
const app = express();


// Implementacion de rutas

const rutasHome = require('./mainRouter/homeRoute')
const rutasIndex = require('./mainRouter/indexRoute')
const rutasCarrito = require('./mainRouter/carritoRoute')
const rutasLogin = require('./mainRouter/loginRoute')
const rutasRegister = require('./mainRouter/registerRoute')

app.use('/', rutasHome)
app.use('/index', rutasIndex)
app.use('/carrito', rutasCarrito)
app.use('/login', rutasLogin)
app.use('/register', rutasRegister)

app.use('/public/', express.static(__dirname + '../../public/'))

app.set("view engine", "ejs")

app.set('views', './src/views')

app.listen(process.env.PORT || 3000, () => console.log("Hola"));

/*
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/home.html', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/Carrito.html', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/Carrito.html'));
})

app.get('/index.html', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/register.html', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login.html', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
*/

