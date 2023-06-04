require("dotenv").config({ path: `${__dirname}/.env` });

const app = require("./app");
const connectMongo = require("./config/db");

connectMongo();

// SERVER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.info(`Server is listening on PORT: ${PORT}`);
});
