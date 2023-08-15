const { Country } = require("../db");

const getAllCountriesController = async () => {
  const countries = await Country.findAll();
  return countries;
};

module.exports = getAllCountriesController;
