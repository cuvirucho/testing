const { getAll, create, getOne, remove, update } = require('../controladores/directore.controle');
const express = require('express');

const directoRouer = express.Router();

directoRouer.route('/director')
    .get(getAll)
    .post(create);

directoRouer.route('/director/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directoRouer;