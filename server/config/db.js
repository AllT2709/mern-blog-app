const mongoose = require("mongoose");

const connection = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("**** MONGOOSE COONNECTED ****");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connection };
