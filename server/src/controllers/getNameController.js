const { Country } = require("../db");
const { Op } = require("sequelize");
const getNameController = async (name) => {
  const nameCountry = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  if (nameCountry.length === 0) {
    throw new Error("Pais no encontrado");
  }
  return nameCountry;
};
module.exports = getNameController;
