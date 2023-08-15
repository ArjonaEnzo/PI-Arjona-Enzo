const { Country } = require("../db");
const axios = require("axios");

const DataBase = async () => {
  try {
    const { data } = await axios("http://localhost:5000/countries");

    const response = data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flagImage: country.flags.png,
        continent: country.region,
        capital: country.capital ? country.capital[0] : "No Capital",
        population: country.population,
        subregion: country.subregion,
        area: country.area,
        
      };
    });
    await Country.bulkCreate(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};
module.exports = DataBase;
