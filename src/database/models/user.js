
function data(sequelize, DataTypes){


    const usuario = sequelize.define(
        'usuario',
        (cols = {
            id: {
                as: 'primaryKey',
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING(200),
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            domicilio: {
                type: DataTypes.STRING,
            },
            perfil: {
                type: DataTypes.STRING,
            },
            accesorios: {
                type: DataTypes.STRING,
            },
        }),
        (config = {
            camelCase: false,
            tablename: 'usuario',
            timestamps: {
                createAt: {
                    type: DataTypes.DATE,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                },
            },
        })
    );

    usuario.associate = function (models) {
        /*usuario.hasMany(models.ventas, {
            foreingKey: 'usuario_id', // foreing key de la tabla de ventas
            as: 'ventas',
        });*/
        usuario.hasMany(models.productos, {
            foreingKey: ' usuario_id', // foreing key de la tabla de producto
            as: 'ventas',
        });
    };

    return usuario;
};

module.exports = data;