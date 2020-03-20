const Author = require('../models').Author;
const Movie = require('../models').Movie;

module.exports = {
    create(req, res) {
        return Author.create(req.body)
            .then(author => res.status(201).send(author))
            .catch(error => res.status(400).send(error));
    },
    getAll() {
        return Author.findAll()
            .then(authors => authors)
            .catch(error => error);
    },
    getOneBy(params) {
        return Author.findOne({
            include: [{ model: Movie, as: 'movies'}], where: params
        })
            .then(author => author)
            .catch(error => error);
    }
};