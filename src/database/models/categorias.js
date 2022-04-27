
function categoria(sequelize, Datatypes){

    alias = 'categoria';
    
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      descripcion: {type: Datatypes.TEXT},
    }
    
    config = {camelCase: false,timestamps: false , tableName: "categoria"}; 
    
    const categoria = sequelize.define(alias,cols,config)
    
    categoria.associate = function (modelos){    
    
       categoria.hasMany(modelos.producto, {
            as: "productos",
            //through: "Producto-Categoria",   // tabla intermedia
            foreignKey: "categoria_id",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            //otherKey: "Producto_id",    // es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
      });
    
    }
    
    return categoria;
    
    }
    
    
    module.exports = categoria;