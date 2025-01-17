import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema=new Schema({
  name:{
    firstname:{
      type:String,
      required:true
    },
    lastname:{
      type:String,
      required:true
    }
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
});
export default userSchema;