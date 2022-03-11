function data(sequelize, Datatypes){

    alias = 'ventas';
    
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      fecha_Venta: {type: Datatypes.DATE}
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const venta = sequelize.define(alias,cols,config)
    
    venta.associate = function (models){    
        venta.belongsTo(models.usuario,{             
            as: "usuario",
            foreignKey: "Usuario_id"

        })
        venta.belongsTo(models.producto,{
            as: "producto",
            foreignKey: "Producto_id"
        })
       
      }
    
    
    
    return venta;
    
    }
    
    
    module.exports = data;