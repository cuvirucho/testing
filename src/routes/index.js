const express = require('express');
const { route } = require('./actort.route');
const actorRouer = require('./actort.route');
const genRoute = require('./genero.roetr');
const directoRouer = require('./directore.router');
const movieRouter = require('./movi.rouyre');

const router = express.Router();

// colocar las rutas aquí

router.use(genRoute)
router.use(movieRouter)
router.use(directoRouer)
router.use(actorRouer)
module.exports = router;