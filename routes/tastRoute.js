import express from "express";
import { addTask ,getAllTask,updateTask,deleteToDo} from "../controller/taskController.js";
const router=express.Router();
router.post("/todo/create-to-do",addTask);
router.get("/todo/get-all-to-do/:userId",getAllTask);
router.patch("/todo/update-to-do/:id",updateTask);
router.delete("/todo/delete-to-do/:id",deleteToDo);
export default router;