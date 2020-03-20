const express = require('express');
const router = express.Router();

const authorsCtrl = require('../controllers').author;
const movieCtrl = require('../controllers').movie;

/* GET home page. */
router.get('/', async (req, res) => {
    let authors = await authorsCtrl.getAll();
    let movies = await movieCtrl.getAll();

    res.render('index', { title: 'Some authors and movies app', authors: authors, movies: movies });
});

/* GET details page. */
router.get('/authors/:id', async (req, res) => {
    let author = await authorsCtrl.getOneBy(req.params);

    res.render('details', { title: author.name, author: author });
});
router.get('/movies/:id', async (req, res) => {
    let movie = await movieCtrl.getOneBy(req.params);

    res.render('details', { title: movie.name, movie: movie });
});

module.exports = router;
