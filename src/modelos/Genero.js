const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genero = sequelize.define('genero', {
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Genero;