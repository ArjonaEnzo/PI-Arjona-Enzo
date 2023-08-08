const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db");
const PORT = 3001;
const getDB = require("./src/controllers/getDB");

// Sincronizar la BD y luego levantar el servidor
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      getDB();
    });
  })
  .catch((error) => console.error("Error al sincronizar la BD:", error));
