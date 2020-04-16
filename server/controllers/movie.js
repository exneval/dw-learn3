const { Movie, Actor, ActorMovies } = require("../models");

exports.show = async (req, res) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Actor,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: {
            model: ActorMovies,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).send({ data: movie });
  } catch (error) {
    res.status(500).send({ message: "Server Internal Error" });
    console.log(error);
  }
};
