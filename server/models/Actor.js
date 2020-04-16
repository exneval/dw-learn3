"use strict";
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    "Actor",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Actor.associate = function (models) {
    Actor.belongsToMany(models.Movie, { through: models.ActorMovies });
  };
  return Actor;
};
