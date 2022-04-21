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
    categoria_id : {type: Datatypes.STRING(2)},
    fecha_eliminacion: {type: Datatypes.DATE},
    fecha_creacion: {type: Datatypes.DATE}
  };
 
  config = {camelCase: false, timestamps: false};
 
  const producto = sequelize.define(alias,cols,config);
  
  producto.associate = function (models){    
    producto.belongsTo(models.usuario, {  
      as: "usuarios",
      foreignKey: "usuario_id" //REL PRO-USU 
    });

    producto.belongsTo(models.categorias, {
          as: "productos",
         // through: "Producto-categoria",   // tabla intermedia
         // foreignKey: "producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
          foreignKey: "categoria_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
          timestamps: false // REL PRO-CAT
    });
   producto.belongsToMany(models.usuario, { //ESTE DA ERROR
          as: "usuario", 
          through: "ventas",   // tabla intermedia, 
          foreignKey: "Producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
          otherKey: "Usuario_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
          timestamps: false // REL PRO-VENTAS
           });}
    return producto;
  }
  
  module.exports = producto;