const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movies = sequelize.define('movies', {
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Movies;    