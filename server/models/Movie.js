"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Movie.associate = function (models) {
    Movie.belongsToMany(models.Actor, { through: models.ActorMovies });
  };
  return Movie;
};
