const postActivitiesController = require("../controllers/postActivitiesController");

const postActivitiesHandler = async (req, res) => {
  try {
    const { name, dificult, duration, season, pais } = req.body;
    const response = await postActivitiesController(
      name,
      dificult,
      duration,
      season,
      pais
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = postActivitiesHandler;
