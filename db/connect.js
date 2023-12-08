const mongoose = require("mongoose");

// .env should ALWAYS be in the root

const connectDB = (url) => {
  return mongoose.connect(url);
}

module.exports = connectDB