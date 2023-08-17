const { Activity, Country } = require("../db");

const postActivitiesController = async (
  name,
  dificult,
  duration,
  season,
  countries
) => {
  if (!name || !dificult || !season || !countries) {
    throw new Error("Campos Obligatorios");
  }

  const newActivity = await Activity.create({
    name,
    dificult,
    duration,
    season,
  });
  await newActivity.addCountry(countries);

  const findCount = await Activity.findOne({
    where: { id: newActivity.id },
    include: [
      {
        model: Country,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return findCount;
};
module.exports = postActivitiesController;
