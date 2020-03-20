'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Movies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            authorId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Authors',
                    key: 'id',
                    as: 'authorId',
                }
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            genre: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            rating: {
                type: Sequelize.INTEGER
            },
            earned: {
                type: Sequelize.FLOAT
            },
            rating: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Movies');
    }
};