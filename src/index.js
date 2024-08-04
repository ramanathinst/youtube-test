import { app } from "./app.js"
import connectDB from "./db/index.js"
import dovenv from "dotenv"


dovenv.config({
    path : "./.env"
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(" server is running || Listing on port :" , process.env.PORT)
    })
}).catch((error) => {
    console.log("mongo connection faild!")
})