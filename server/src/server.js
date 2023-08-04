const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
//Rutas
const getAllCountries = require("./routes/getAllCountrie");
const getCountry = require("./routes/getCountry");
const getName = require("./routes/getName");
const postActivity = require("./routes/postActivities");
const getActivities = require("./routes/getActivities");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

server.use("/", getAllCountries);
server.use("/", getName);
server.use("/", getCountry);
server.use("/", postActivity);
server.use("/", getActivities);

module.exports = server;
