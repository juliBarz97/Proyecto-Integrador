function carrito( sequelize, Datatypes ){
    alias = 'carrito';

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        Producto_id: {type: Datatypes.INTEGER},
        usuario_id: {type: Datatypes.INTEGER},
        fecha_pedido: {type: Datatypes.DATE}
    }
    
    config = {camelCase: false, timestamps: false, tableName: "carritoCompras"};
 
    const carrito = sequelize.define(alias,cols,config);

    carrito.associate = function (models){    
        carrito.belongsTo(models.usuario, {
            as: "usuario",
            foreignKey: "usuario_id" //REL USER-CARRITO
        });
    
        carrito.belongsTo(models.producto, {
            as: "producto",
            foreignKey: "producto_id",  //REL PRO-CARRITO
        });
    }

    return carrito;
    
  }

  module.exports = carrito;  