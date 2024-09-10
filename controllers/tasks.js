const getAllTasks = (req, res) => {
  res.send("All tasks from the file");
};

const createTask = (req, res) => {
  res.send("creating task");
};

const getTask = (req, res) => {
  res.send("getting task");
};

const updateTask = (req, res) => {
  res.send("updating task");
};

const deleteTask = (req, res) => { 
    res.send("deleting task");
};

module.exports = {
  getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask, 
};
