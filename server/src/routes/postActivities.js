const router = require("express").Router();

const getActivitiesHandler = require("../handlers/postActivitiesHandler");

router.post("/activities", getActivitiesHandler);

module.exports = router;
