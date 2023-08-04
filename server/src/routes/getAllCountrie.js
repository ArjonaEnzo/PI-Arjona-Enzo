const router = require("express").Router();

const getAllCountriesHandler = require("../handlers/getAllCountriesHandler");

router.get("/countries", getAllCountriesHandler);

module.exports = router;
