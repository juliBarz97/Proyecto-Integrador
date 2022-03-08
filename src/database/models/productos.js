function data(sequelize, Datatypes){

    alias = 'productos';
    
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING},
      descripcion: {type: Datatypes.TEXT},
      precio: {type: Datatypes.INTEGER},
      descuento: {type: Datatypes.INTEGER},
      stock: { type: Datatypes.INTEGER},
      fecha_eliminacion: {type: Datatypes.DATE},
      fecha_creacion: {type: Datatypes.DATE},
      usuario_id: {type: Datatypes.INTEGER},
      categoria_id: {type: Datatypes.INTEGER}
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const productos = sequelize.define(alias,cols,config)
    
    productos.associate = function (modelos){
    
      productos.belongsTo(modelos.users, {   
        as: "usuarios",
        foreignKey: "usuario_id"
      });
    
    
      productos.belongsToMany(modelos.categorias, {
            as: "categorias",
            through: "Producto-categoria",   // tabla intermedia
            foreignKey: "producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            otherKey: "categoria_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
      });
      productos.belongsToMany(modelos.ventas, {
            as: "ventas",
            through: "ventas",   // tabla intermedia
            foreignKey: "producto_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            otherKey: "usuario_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
  });
    
    }
    
    
    return productos;
    
    }
    
    
    module.exports = data;