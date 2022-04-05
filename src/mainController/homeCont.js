const db = require('../database/models');

const controlador = {
	home: (req, res) => {
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

			res.render('home', { p: lista });
		});
	},
<<<<<<< HEAD
	carrito: (req, res) => {
		res.render('Carrito');
	},
	index: (req, res) => {
		/*
=======
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
>>>>>>> d7a30f6bb02025985c7082fa0caaf20208c629c1
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
<<<<<<< HEAD
		res.render('index');
	},
};
=======
        res.render("index");
	}
}

>>>>>>> d7a30f6bb02025985c7082fa0caaf20208c629c1

module.exports = controlador;
