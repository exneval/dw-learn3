"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "actors",
      [
        {
          name: "Sule",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nunung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("actors", null, {});
  },
};
