const router = require("express").Router();

const getActivitiesHandler = require("../handlers/getActivitiesHandler");

router.get("/activities", getActivitiesHandler);

module.exports = router;
