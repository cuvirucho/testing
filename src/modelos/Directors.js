const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Directors = sequelize.define('directors', {
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Directors;