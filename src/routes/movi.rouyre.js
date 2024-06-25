const { getAll, create, getOne, remove, update } = require('../controladores/movie.conrolo');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movie')
    .get(getAll)
    .post(create);

movieRouter.route('/movie/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = movieRouter;