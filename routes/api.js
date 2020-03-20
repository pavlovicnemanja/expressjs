const express = require('express');
const router = express.Router();

// Routes for Author API
const authorCtrl = require('../controllers').author;
router.get('/authors', authorCtrl.getAll);
router.post('/author', authorCtrl.create);

// Routes for Movie API
const movieCtrl = require('../controllers').movie;
router.get('/movies', movieCtrl.getAll);
router.post('/movie', movieCtrl.create);

module.exports = router;
