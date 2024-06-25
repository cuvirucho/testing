const { getAll, create, getOne, remove, update } = require('../controladores/actores.controsles');
const express = require('express');

const actorRouer = express.Router();

actorRouer.route('/actors')
    .get(getAll)
    .post(create);

actorRouer.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = actorRouer;