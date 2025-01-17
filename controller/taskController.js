import Task from "../model/taskModel.js";

export const addTask = async (req, res) => {
  try {
    const { title, description, iscompleted, createdBy, createdAt } = req.body;
    const taskData = {
      title: title,
      description: description,
      iscompleted: iscompleted,
      createdBy: createdBy,
      createdAt: createdAt,
    };
    await Task.create(taskData);
    return res.status(200).json({ message: "Data recieved", data: req.body });
  } catch (error) {
    return res.status(400).json({ message: "Failed CRUD", data: req.body });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ createdBy: userId });
    if (!tasks) return res.status(404).json({ message: "Task data not found" });
   
    return res
      .status(200)
      .json({ message: "successfull retrival", tasks: tasks });
  } catch (error) {
    return res.status(404).json({ message: "issue in the server" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    const { title, description, iscompleted, createdBy, createdAt } = req.body;
    const result = await task.updateOne({
      title: title,
      description: description,
      iscompleted: iscompleted,
      createdBy: createdBy,
      createdAt: createdAt,
    });
    if (result.acknowledged) {
      return res.status(200).json({ message: "Task Updated successfully" });
    }
    return res.status(404).json({ message: "Invalid task id" });
  } catch (error) {
    return res.status(500).json({ message: "Issue updating" });
  }
};

export const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const task=await Task.findById({_id:id});
    const result=await task.deleteOne();
    if(result.acknowledged)
    return res.status(200).json({message:"Task found",Task:task});
    return res.status(200).json({message:"Task not found"});

    
  } catch (error) {
    return res.status(500).json({message:"Issue in Server"});
  }
};
