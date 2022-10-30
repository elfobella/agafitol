import express from "express";
import { getUsers, login, logout, register } from "../controller/auth.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
