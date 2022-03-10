function producto(sequelize, Datatypes){

  alias = 'producto';
 
  cols = {
    id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: Datatypes.STRING(500)},
    descripcion: {type: Datatypes.TEXT},
    precio: {type: Datatypes.INTEGER},
    descuento: {type: Datatypes.INTEGER},
    usuario_id: {type: Datatypes.INTEGER},
    usuarioId : {type: Datatypes.INTEGER},
    imageProd: {type: Datatypes.STRING(150)},
    stock: { type: Datatypes.INTEGER},
    fecha_eliminacion: {type: Datatypes.DATE},
    fecha_creacion: {type: Datatypes.DATE}
  }
 
  config = {camelCase: false, timestamps: false};
 
  const producto = sequelize.define(alias,cols,config)
  /*
  producto.associate = function (modelos){    
    producto.belongsTo(modelos.usuario, {  
      as: "usuarios",
      foreignKey: "usuario_id"
    });

    producto.belongsToMany(modelos.categorias, {
          as: "categorias",
          through: "Producto-categoria",   // tabla intermedia
          foreignKey: "producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
          otherKey: "categoria_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
          timestamps: false
    });
    producto.belongsToMany(modelos.ventas, {
          as: "ventas",
          through: "ventas",   // tabla intermedia
          foreignKey: "producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
          otherKey: "usuario_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
          timestamps: false
           });
    }*/
    return producto;
  }
  
  module.exports = producto;