const getNameController = require("../controllers/getNameController");

const getNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const response = await getNameController(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getNameHandler;
