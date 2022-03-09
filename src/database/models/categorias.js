function data(sequelize, Datatypes){

    alias = 'categorias';
    
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      descripcion: {type: Datatypes.TEXT},
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const categoria = sequelize.define(alias,cols,config)
    
    categoria.associate = function (modelos){    
    
       categoria.belongsToMany(modelos.productos, {
            as: "productos",
            through: "Producto-categoria",   // tabla intermedia
            foreignKey: "Categoria_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            otherKey: "Producto_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
      });
    
    }
    
    return categoria;
    
    }
    
    
    module.exports = data;