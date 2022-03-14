const mongoose = require("mongoose");

const dbConnect = () => {
  // connect DB
  const dbUrl =
    "mongodb+srv://book:eduBl2eiLy3FqlFl@cluster0.ojgdo.mongodb.net/book-keeping-app"; // change test to the name of our app
  mongoose
    .connect(dbUrl, {
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