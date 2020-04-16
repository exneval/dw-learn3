"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("actormovies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "movies",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      actorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "actors",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ActorMovies");
  },
};
