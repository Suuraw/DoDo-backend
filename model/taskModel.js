import mongoose from "mongoose";
import taskSchema from "../schema/task.js";
const Task=new mongoose.model("Task",taskSchema);
export default Task;