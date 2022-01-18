const express = require('express')
const path = require('path')
const app = express();


// Implementacion de rutas

const rutasCarrito = require('.mainRouter/carritoRoute')
const rutasHome = require('.mainRouter/homeRoute')
const rutasIndex = require('.mainRouter/indexRoute')
const rutasLogin = require('.mainRouter/loginRoute')
const rutasRegister = require('.mainRouter/registerRoute')

app.use('/src/mainRoute', carritoRoute)
app.use('/src/mainRoute', homeRoute)
app.use('/src/mainRoute', indexRoute)
app.use('/src/mainRoute', loginRoute)
app.use('/src/mainRoute', registerRoute)

app.use('/public/', express.static(__dirname + '/public/'))


app.listen(process.env.PORT || 3000, () => console.log("Hola"));

app.set("view engine", "ejs")

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


