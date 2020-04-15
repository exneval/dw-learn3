const { Country, CapitalCity } = require("../models");

exports.index = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: [
        {
          model: CapitalCity,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.send({ data: countries });
  } catch (error) {
    console.log(error);
  }
};
