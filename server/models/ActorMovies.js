"use strict";
module.exports = (sequelize, DataTypes) => {
  const ActorMovies = sequelize.define("ActorMovies", {}, {});
  ActorMovies.associate = function (models) {
    ActorMovies.belongsTo(models.Actor);
    ActorMovies.belongsTo(models.Movie);
  };
  return ActorMovies;
};
