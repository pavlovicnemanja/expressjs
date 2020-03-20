'use strict';
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
        description: DataTypes.TEXT,
        rating: DataTypes.INTEGER,
        earned: DataTypes.FLOAT,
    }, {});

    Movie.associate = function (models) {
        Movie.belongsTo(models.Author, {
            foreignKey: 'authorId',
            onDelete: 'CASCADE',
        })
    };
    return Movie;
};