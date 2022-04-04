const db = require('../database/models');

const controlador = {	
    home: (req, res) => {
        
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
	
			res.render('home',{p: lista});
		});
	},
    carrito:(req, res) => {
		db.carrito.findAll( 
            {include: [{association: "usuario"}, {association: "producto"}],
			where: { usuario_id: req.session.userLogged.id }}
        ).then( (resultado) => {
            let lista=[];

			for ( unProducto of resultado ){
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

			res.render("Carrito", {p: lista});
		})
	},
    index: (req, res) => {
        /*
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
        */
        res.render("index");
	}
}


module.exports = controlador;
