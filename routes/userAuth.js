import express from "express";
import { register } from "../controller/registerUser.js";
import { login } from "../controller/loginUser.js";
const router = express.Router();

router.post("/register", register);
router.post("/login",login);

export default router;
