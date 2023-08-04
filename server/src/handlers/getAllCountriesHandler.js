const getAllCountriesController = require("../controllers/getAllCountriesController");

const getAllCountriesHandler = async (req, res) => {
  try {
    const response = await getAllCountriesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getAllCountriesHandler;