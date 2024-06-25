const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actores = sequelize.define('actores', {
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Actores;