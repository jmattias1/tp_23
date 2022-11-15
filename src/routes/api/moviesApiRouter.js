const express = require('express');
const router = express.Router();
const moviesControllerApi = require('../../controllers/api/moviesControllerApi');

router.get('/movies', moviesControllerApi.list);

router.get('/movies/:id', moviesControllerApi.detail);

router.get('/movies/recomended/:rating', moviesControllerApi.recomended);

router.post('/movies/create', moviesControllerApi.create);

router.put('/movies/update/:id', moviesControllerApi.update);

router.delete('/movies/delete/:id', moviesControllerApi.destroy);

module.exports = router;