import express from "express";
import {login, ragister} from "../controllers/auth.controllers.js"

const router = express.Router()

router.get("/login", login)
router.get("/ragister", ragister)

export default router