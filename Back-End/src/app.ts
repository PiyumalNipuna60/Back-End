import { config } from "dotenv";
config();

import express  from "express";
import db from "mongoose";
import routes from "./routes";

const app=express();

app.use("/",routes)

db.connect(process.env.MONGO_DB_URL!)
.then(()=>{
    console.log("Connected..!");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running");
        
    })
    
}).catch((Error)=>{
    console.log("Somthing wrong");
    
})