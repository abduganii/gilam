import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import router from "./routes";

const PORT = process.env.PORT
const MONGO_URL: any = process.env.MONGO_URL

const app = express();
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("mongodb connected"))
    .catch((err): any => console.log(err))

app.get('/', (req, res) => {
    res.send("ok")
})

app.use(express.json());
app.use(cors());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})