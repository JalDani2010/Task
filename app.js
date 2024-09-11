const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware for logging and getting the data in req.body
app.use(express.static('./public'));
app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};


app.use("/api/v1/tasks", tasks);


start();
