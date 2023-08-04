const getActivitiesController = require("../controllers/getActivitiesController");

const getActivitiesHandler = async (req, res) => {
  try {
    const response = await getActivitiesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getActivitiesHandler;
