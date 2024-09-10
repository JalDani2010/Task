const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");

// middleware for logging and getting the data in req.body
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});
