function usuarios(sequelize, DataTypes){
	
	
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
			image : {
				type: DataTypes.STRING(150),
			}

		}),
		(config = {
			camelCase: false,
			tablename: 'usuario',
			timestamps: false 
			/*{
				createAt: {
					type: DataTypes.DATE,
				},
				updatedAt: {
					type: DataTypes.DATE,
				},
			}*/,
		})
	);

	usuario.associate = function (models) {
		usuario.belongsToMany(models.producto, {
			as: "producto",
			through: "ventas", //ESTE DA ERROR
			foreignKey: "Usuario_id", // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
			otherKey: "Producto_id",  // referencia al otro FK
          	timestamps: false // REL USUARIO-VENTAS
		});
		usuario.hasMany(models.producto, {
			foreingKey: 'usuario_id', // foreing key de la tabla de producto
			as: 'creacion',
		});
	};

	return usuario;
};
module.exports = usuarios;
