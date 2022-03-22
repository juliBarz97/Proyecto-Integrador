const db = require('../database/models');
const producto = require('../database/models/productos');

const controller = {
	// Root - Show all products
	index: (req, res) => {

		db.producto.findOne({where: {id: req.body.id}}).then( (unProducto) => {
			let lista=[];

			let unProd = {
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
			}

			lista.push(unProd);

			console.log(lista);

			res.render('/index', {producto: lista});
		} )
		
	},
	listado: (req, res) => {
		db.producto.findAll().then( (productos) => {
			let lista=[];

			for ( unProducto of productos ){
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
				}

				lista.push(unProd);

			}

			res.render('products/listado',{p: lista});
		});
		
	},


	// Detail - Detail from one product
	detail: (req, res) => {

		let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;
		console.log(idProductoSeleccionado)
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
		db.producto.create({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			descuento: req.body.descuento,
			stock: req.body.stock,
			fecha_eliminacion: null,
			fecha_creacion: req.body.fecha_creacion,
			usuario_id: req.session.userLogged.id,
			categoria_id: req.body.categoria_id,
		}).then((resultados) => {
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