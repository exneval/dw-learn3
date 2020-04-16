"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "actormovies",
      [
        {
          movieId: 1,
          actorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 1,
          actorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 1,
          actorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("actormovies", null, {});
  },
};
