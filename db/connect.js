const mongoose = require("mongoose");


const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
    console.log("Database connected");
};

module.exports = connectDB;
