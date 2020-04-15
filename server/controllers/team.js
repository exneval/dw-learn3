const { Team, Player } = require("../models");

exports.index = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [
        {
          model: Player,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.send({ data: teams });
  } catch (error) {
    console.log(error);
  }
};
