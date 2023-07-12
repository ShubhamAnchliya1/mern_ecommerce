const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex:true
      })
      .then((data) => {
        console.log("Connected to MongoDB");
        // console.log(`connected to mongodb : ${data.connection.host}`);
      });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
module.exports = dbConnect;
