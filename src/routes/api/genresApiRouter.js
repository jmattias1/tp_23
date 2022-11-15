const express = require('express')
const router = express.Router()
const genresControllerApi = require('../../controllers/api/genresControllerApi')

router.get('/genres', genresControllerApi.list);

router.get('/genres/:id', genresControllerApi.detail);

router.get('/genres/:id/movies', genresControllerApi.genreMovies);

module.exports = router;