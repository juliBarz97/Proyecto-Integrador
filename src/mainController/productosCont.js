const db = require('../database/models');

const controller = {
    // Root - Show all products
    index: (req, res) => {      
        db.producto.findAll()
            .then((lista) =>{
                res.render('/index',{p: lista});
        });
       
    },
    listado: (req, res) => {
        db.producto.findAll().then((lista) =>{
                res.render('products/listado',{p: lista
            });
        });
    },


    // Detail - Detail from one product
    detail: (req, res) => {
        let idProductoSeleccionado = req.params.id;
        db.producto.findOne({
            where: {
               id: idProductoSeleccionado
            }
         }).then(function(productoSeleccionado) {
            if (!productoSeleccionado) {
                return 'not find';
            }
            res.render('index',{producto: productoSeleccionado});
         });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('products/crear');
    },
   
    // Create -  Method to store
    store: (req, res) => {
        console.log(req.body);
        db.producto.create({
                id: 0,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                descuento: req.body.descuento,
                stock : 0,
                imageProd : '',
                usuarioId : 1,
                usuario_id : 1,
                fecha_eliminacion : null,
                fecha_creacion : null
            })
            .then((resultados)  => {
                res.redirect('/');
             });


    },

    // Update - Form to edit
    editar: (req, res) => {
        /*
        let idProductoSeleccionado = req.params.id;
        let productoSeleccionado;

        for (let p of lista){

            if(p.id==idProductoSeleccionado){
                productoSeleccionado=p;
                break;
            }
        }
        res.render('products/editar',{producto: productoSeleccionado});
        */
    },
    // Update - Method to update
    update: (req, res) => {
        /*
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
        */
    },

    // Delete - Delete one product from DB
    destroy : (req, res) => {
        /*
        let idProductoSeleccionado = req.params.id;

        let products2 = lista.filter(function(element){
            return element.id!=idProductoSeleccionado;
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(products2,null,' '));

        lista = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('home');
        */
    }
};

module.exports = controller;