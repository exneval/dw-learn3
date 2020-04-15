"use strict";
module.exports = (sequelize, DataTypes) => {
  const CapitalCity = sequelize.define(
    "CapitalCity",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  CapitalCity.associate = function (models) {
    CapitalCity.belongsTo(models.Country);
  };
  return CapitalCity;
};
