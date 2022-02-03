const express = require('express')
const path = require('path')
const app = express();

const methodOverride = require('method-override');


// Implementacion de rutas

const rutasHome = require('./mainRouter/homeRoute')
const rutasUsers = require('./mainRouter/usersRoute')
const rutasProducto = require('./mainRouter/productosRoute')

app.use('/', rutasHome)
app.use('/products', rutasProducto)
app.use('/users', rutasUsers)



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); 

app.use('/public/', express.static(__dirname + '../../public/'))

app.set("view engine", "ejs")

app.set('views','./src/views')

app.listen(process.env.PORT || 3000, () => console.log("Hola"));
