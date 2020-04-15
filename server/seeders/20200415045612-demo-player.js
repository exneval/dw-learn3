"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "players",
      [
        {
          name: "Lemon",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 1,
        },
        {
          name: "Xin",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 1,
        },
        {
          name: "Egi",
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("players", null, {});
  },
};
