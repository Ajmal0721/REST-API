const mongoose = require("mongoose");

let DataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ishartjahan82:12345@cluster0.ona85.mongodb.net/REST-API"
    );
    console.log("Database Connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBase;