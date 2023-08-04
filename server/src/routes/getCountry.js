const router = require("express").Router();

const { Model } = require("sequelize");
const getCountryHandler = require("../handlers/getCountryHandler");

router.get("/countries/:idPais", getCountryHandler);

module.exports = router;
