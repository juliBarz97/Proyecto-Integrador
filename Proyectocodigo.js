const express = require('express')
const path = require('path')
const app = express();


app.listen(process.env.PORT || 3000, () => console.log("Hola"));


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


app.use('/public/', express.static(__dirname + '/public/'))