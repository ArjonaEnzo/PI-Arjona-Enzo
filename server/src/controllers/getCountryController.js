const { Country, Activity } = require("../db");

const getCountryController = async (idPais) => {

  const country = await Country.findOne({
    where: { id: idPais },
    include: [Activity],
  });
  return country;
};
module.exports = getCountryController;
