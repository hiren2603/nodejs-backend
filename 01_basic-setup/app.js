import dotenv from 'dotenv'
import express from "express";
import authRoutes from "./src/routes/auth.routes.js"
dotenv.config()


const app = express();
const port = process.env.PORT ||5000

app.use('/api/v1/auth', authRoutes)

app.listen(port, ()=> console.log(`Server is running on port ${port}`))