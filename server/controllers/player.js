const { Team, Player } = require("../models");

exports.index = async (req, res) => {
  try {
    const players = await Player.findAll({
      include: [
        {
          model: Team,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      where: { teamId: 2 },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.send({ data: players });
  } catch (error) {
    console.log(error);
  }
};
