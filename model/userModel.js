import mongoose from "mongoose";
import userSchema from "../schema/user.js";
const User=new mongoose.model("User",userSchema);
export default User;