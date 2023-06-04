const mongoose = require("mongoose");

const connectMongo = async () => {
  const MONGO_DB_URL = process.env.MONGO_DB_URL.replace(
    "<PASSWORD>",
    process.env.MONGO_PASSWORD
  );

  try {
    await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongo;
