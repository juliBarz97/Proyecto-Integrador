const db = require('../database/models');
const producto = require('../database/models/productos');
const carrito = require('../database/models/carrito')
const {validationResult} = require('express-validator')

const controller = {
	// Root - Show all products
	index: (req, res) => {
		db.producto.findOne({ where: { id: req.body.id } }).then((unProducto) => {
			let lista = [];

			let unProd = {
				id: unProducto.id,
				nombre: unProducto.nombre,
				descripcion: unProducto.descripcion,
				precio: unProducto.precio,
				descuento: unProducto.descuento,
				stock: unProducto.stock,
				fecha_eliminacion: unProducto.fecha_eliminacion,
				fecha_creacion: unProducto.fecha_creacion,
				usuario_id: unProducto.usuario_id,
				categoria_id: unProducto.categoria_id,
				imagen: unProducto.imageProd,
			};

			lista.push(unProd);

			console.log(lista);

			res.render('/index', { producto: lista });
		});
	},
	apiProduct: (req, res) => {
		db.producto.findAll()
				.then(unProducto => {

					console.log(unProducto)
					return res.status(200).json({
						registro: unProducto.length,
						data: unProducto,
						codigo : 200,	
					})
			
			
			
			/*let lista = [];

			let unProd = {
				nombre: unProducto.nombre,
				descripcion: unProducto.descripcion,
				precio: unProducto.precio,
				descuento: unProducto.descuento,
				stock: unProducto.stock,
			};

			lista.push(unProd);

			console.log(lista); 

			res.json({
				productos: "Productos",
				codigo: 200,
				data : lista
			})*/
			
		});
	},
	apiCarrito : (req, res) => {
		db.carrito.findAll()
			.then(carritoP => {
				return res.status(200).json({
					registro: carritoP.length,
					data: carritoP,
					codigo : 200,	
				})
			})
	},
	listado: (req, res) => {
		db.producto.findAll().then((productos) => {
			let lista = [];

			for (unProducto of productos) {
				let unProd = {
					id: unProducto.id,
					nombre: unProducto.nombre,
					descripcion: unProducto.descripcion,
					precio: unProducto.precio,
					descuento: unProducto.descuento,
					stock: unProducto.stock,
					fecha_eliminacion: unProducto.fecha_eliminacion,
					fecha_creacion: unProducto.fecha_creacion,
					usuario_id: unProducto.usuario_id,
					categoria_id: unProducto.categoria_id,
					imagen: unProducto.imageProd,
				};

				lista.push(unProd);
			}
			res.render('products/listado', { p: lista });
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		db.producto
			.findOne({ where: { id: idProductoSeleccionado } })
			.then((unProducto) => {
				let unProd = {
					id: unProducto.id,
					nombre: unProducto.nombre,
					descripcion: unProducto.descripcion,
					precio: unProducto.precio,
					descuento: unProducto.descuento,
					stock: unProducto.stock,
					fecha_eliminacion: unProducto.fecha_eliminacion,
					fecha_creacion: unProducto.fecha_creacion,
					usuario_id: unProducto.usuario_id,
					categoria_id: unProducto.categoria_id,
					imagen: unProducto.imageProd,
				};

				res.render('index', { producto: unProd });
			});

		/*

		for (let p of lista){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}
		*/
	},

	guardarEnCarrito : (req, res) => {
		db.carrito
			.create({
				producto_id : req.params.id  ,			
				usuario_id: req.session.userLogged.id,
				fecha_pedido: Date.now(),
				
			})
			.then((resultados) => {
				res.redirect('/');
			});
	
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products/crear');
	},

	// Create -  Method to store
	store: (req, res) => {
		/*		let nuevoID=(lista[lista.length-1].id)+1 
		
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
		
*/
		const resultValidation = validationResult(req);
				
		if (resultValidation.errors.length > 0 ){
			return res.render('products/crear', {
				errors: resultValidation.mapped(),
				oldData : req.body })
		}

		db.producto
			.create({
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				precio: req.body.precio,
				descuento: req.body.descuento,
				stock: req.body.stock,
				fecha_eliminacion: null,
				fecha_creacion: req.body.fecha_creacion,
				usuario_id: req.session.userLogged.id,
				categoria_id: req.body.categoria_id,
				imageProd: req.file.filename,
			})
			.then((resultados) => {
				res.redirect('/');
			});
	},

	// Update - Form to edit
	editar: (req, res) => {
		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		db.producto
			.findOne({ where: { id: idProductoSeleccionado } })
			.then((unProducto) => {
				let unProd = {
					id: unProducto.id,
					nombre: unProducto.nombre,
					descripcion: unProducto.descripcion,
					precio: unProducto.precio,
					descuento: unProducto.descuento,
					stock: unProducto.stock,
					fecha_eliminacion: unProducto.fecha_eliminacion,
					fecha_creacion: unProducto.fecha_creacion,
					usuario_id: unProducto.usuario_id,
					categoria_id: unProducto.categoria_id,
					imagen: unProducto.imageProd,
				};

				res.render('products/editar', { producto: unProd });
			});
	},
	// Update - Method to update
	update: (req, res) => {
		/*
		const resultValidation = validationResult(req);
				
		if (resultValidation.errors.length > 0 ){
			return res.render('products/editar/:id', { //tira error aca
				errors: resultValidation.mapped(),
				oldData : req.body })
		}	*/

		let idProductoSeleccionado = req.params.id;
		let datos = req.body;

		db.producto
			.update(
				{
					nombre: datos.nombre,
					descripcion: datos.descripcion,
					precio: datos.precio,
					descuento: datos.descuento,
					stock: datos.stock,
					categoria_id: datos.categoria_id,
					imagen: datos.imageProd,
				},
				{
					where: { id: idProductoSeleccionado },
				}
			)
			.then((resultados) => {
				res.redirect('/');
			});

		/*

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
		*/

		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.producto.destroy({
			where: {
				id: req.params.id,
			},
		});

		res.redirect('/');

		// ESTO ES CON JSON
		/*
		let idProductoSeleccionado = req.params.id;

		let products2 = lista.filter(function(element){
			return element.id!=idProductoSeleccionado;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products2,null,' '));

		lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		*/
	},
};

module.exports = controller;
