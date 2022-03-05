'use strict';

const db = require('../models/index');

const op = db.Sequelize.Op;
const usuarios = (sequelize, DataTypes) => {
	const usuario = sequelize.define(
		'usuario',
		(cols = {
			id: {
				as: 'primaryKey',
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
	return usuario;
};

usuario.associate = function (models) {
	usuario.hasMany(models.ventas, {
		foreingKey: 'usuario_id', // foreing key de la tabla de ventas
		as: 'ventas',
	});
	usuario.hasMany(models.producto, {
		foreingKey: ' usuario_id', // foreing key de la tabla de producto
		as: 'ventas',
	});
};
module.exports = usuarios;
