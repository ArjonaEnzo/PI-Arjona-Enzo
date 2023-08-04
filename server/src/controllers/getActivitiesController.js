const { Activity,Country } = require("../db");

const getActivitiesController = async () => {
  const allActivities = await Activity.findAll({include: [
      {
        model: Country,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],});

  return allActivities;
};

module.exports = getActivitiesController;
