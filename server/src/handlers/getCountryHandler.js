const getCountryController = require("../controllers/getCountryController");

const getCountryHandler = async (req, res) => {
  try {
    const { idPais } = req.params;

    const response = await getCountryController(idPais);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getCountryHandler;
