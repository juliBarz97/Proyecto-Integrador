const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../mainData/productos.json');
let lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('listado',{p: lista});
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

		res.render('detail',{producto: productoSeleccionado});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
		let nuevoID=(products[products.length-1].id)+1 
		
		let productoNuevo = {
			id: nuevoID,
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			descuento: req.body.descuento,
			imagen: "FundaCelular3D.jpg",
			categoria:"en venta"		
		}

		
		products.push(productoNuevo)

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');

	},

	// Update - Form to edit
	edit: (req, res) => {
		
		
		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		for (let p of products){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}

		res.render('product-edit-form',{producto: productoSeleccionado});
	},
	// Update - Method to update
	update: (req, res) => {

		let idProductoSeleccionado = req.params.id;
		let datos = req.body;

		for (let p of products){
			if(p.id==idProductoSeleccionado){
				p.nombre = datos.nombre;
				p.precio = datos.precio;
				p.descuento = datos.descuento;
				p.descripcion = datos.descripcion;
				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

	    res.redirect('/');

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		let idProductoSeleccionado = req.params.id;

		let products2 = products.filter(function(element){
			return element.id!=idProductoSeleccionado;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products2,null,' '));

	    res.redirect('/');


	}
};

module.exports = controller;