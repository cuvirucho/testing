const { getAll, create, getOne, remove, update } = require('../controladores/genero.controle');
const express = require('express');

const genRoute = express.Router();

genRoute.route('/genero')
    .get(getAll)
    .post(create);

genRoute.route('/genero/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genRoute;