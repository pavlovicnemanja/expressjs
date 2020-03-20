'use strict';
module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        name: DataTypes.STRING,
        biography: DataTypes.TEXT,
        birthday: DataTypes.DATE,
        role: DataTypes.STRING
    }, {});

    Author.associate = function (models) {
        Author.hasMany(models.Movie, {
            foreignKey: 'authorId',
            as: 'movies',
        })
    };
    return Author;
};