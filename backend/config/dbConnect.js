const mongoose = require("mongoose");

const dbConnect = () => {
  // connect DB
  // change test to the name of our app
  mongoose
    .connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Db Connection established");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = dbConnect;