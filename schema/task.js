import mongoose from "mongoose";
const {Schema}=mongoose;
const taskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    iscompleted:{
        type:Boolean,
        required:true,
    },
    createdBy:{
        type:String,
        required:true
    },
    createdAt:{
        type: String,
        required:true
    }
});
export default taskSchema;