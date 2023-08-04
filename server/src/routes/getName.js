const router = require("express").Router();

const getNameHandler = require("../handlers/getNameHandler");

router.get("/countries/name?", getNameHandler);

module.exports = router;
