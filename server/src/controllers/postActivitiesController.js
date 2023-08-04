const { Activity, Country } = require("../db");

const postActivitiesController = async (
  name,
  dificult,
  duration,
  season,
  pais,
) => {
  
  if (!name || !dificult || !season || !pais) {
    throw new Error("Campos Obligatorios");
  }

  const findAct = await Activity.findOne({ where: { name: name } });
  if (findAct) {
    throw new Error("La Actividad ya existe!");
  }

  const newActivity = await Activity.create({
    name,
    dificult,
    duration,
    season,
    pais,
  });
  await newActivity.addCountry(pais);

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
