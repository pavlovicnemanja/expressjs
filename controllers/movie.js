const Movie = require('../models').Movie;
const Author = require('../models').Author;

module.exports = {
    create(req, res) {
        return Movie.create(req.body)
            .then(movie => res.status(201).send(movie))
            .catch(error => res.status(400).send(error));
    },
    getAll(req, res) {
        return Movie.findAll({
            include: [{
                model: Author
            }]
        })
            .then(movies => movies)
            .catch(error => error);
    },
    getOneBy(params) {
        return Movie.findOne({
            include: [{ model: Author }], where: params
        })
            .then(movie => movie)
            .catch(error => error);
    }
};