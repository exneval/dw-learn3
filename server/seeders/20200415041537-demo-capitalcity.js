"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "capitalcities",
      [
        {
          name: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
          countryId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("capitalcities", null, {});
  },
};
