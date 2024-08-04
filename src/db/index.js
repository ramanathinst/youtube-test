import mongoose from "mongoose";
import { DATABASE_NAME } from "../instants.js";

const connectDB = async () => {
    try {
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`Mongo DB connection Successfull || host on :  ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Mongo DB connection Faild : ${error}`)
        process.exit(1)
    }
}

export default connectDB