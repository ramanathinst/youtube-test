import connectDB from "./db/index.js"
import dovenv from "dotenv"

dovenv.config({
    path : "./.env"
})


connectDB()