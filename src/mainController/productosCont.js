const session = require('express-session');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../mainData/productos.json');
const lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		
		res.render('/index',{p: lista});
	},
	listado: (req, res) => {
		
		res.render('products/listado',{p: lista});
	},


	// Detail - Detail from one product
	detail: (req, res) => {

		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		for (let p of lista){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}

		res.render('index',{producto: productoSeleccionado});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products/crear');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
		let nuevoID=(lista[lista.length-1].id)+1 
		
		let productoNuevo = {
			id: nuevoID,
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			descuento: req.body.descuento,
			categoria:"en venta"
		}
		
		lista.push(productoNuevo)

		fs.writeFileSync(productsFilePath, JSON.stringify(lista,null,' '));

		db.productos.create({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			descuento: req.body.descuento,
			stock: req.body.stock,
			fecha_eliminacion: null,
			fecha_creacion: req.body.fecha_creacion,
			usuario_id: req.session.user.id,
			categoria_id: req.body.categoria_id,
		}
		).then((resultados) => {
			res.redirect('/');
		})

		

	},

	// Update - Form to edit
	editar: (req, res) => {
		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		for (let p of lista){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}

		res.render('products/editar',{producto: productoSeleccionado});

			
	    
		
	},
	// Update - Method to update
	update: (req, res) => {

		let idProductoSeleccionado = req.params.id;
		let datos = req.body;

		for (let p of lista){
			if(p.id==idProductoSeleccionado){
				p.nombre = datos.nombre;
				p.descripcion = datos.descripcion;
				p.precio = datos.precio;
				p.descuento = datos.descuento;
				p.categoria = datos.categoria;
				p.imagen = datos.imagen;
				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(lista,null,' '));

	    res.redirect('/');

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		let idProductoSeleccionado = req.params.id;

		let products2 = lista.filter(function(element){
			return element.id!=idProductoSeleccionado;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products2,null,' '));

		lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		res.render('home');
	}
};

module.exports = controller;