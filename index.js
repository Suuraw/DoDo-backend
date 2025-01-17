import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userAuth from "./routes/userAuth.js"
import taskRoute from "./routes/tastRoute.js"
dotenv.config();
const app=express();
const port=process.env.PORT||3000;
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",userAuth);
app.use("/api",taskRoute);
app.listen(port,()=>{
  console.log(`The server is up on port ${port}`)
})