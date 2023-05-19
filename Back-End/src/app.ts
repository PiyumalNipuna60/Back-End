import { config } from "dotenv";
config();

import express, { Request, Response }  from "express";
import db from "mongoose";
import routes from "./routes";
import { error } from "console";

const app=express();

app.use("/",routes);

//Error mg Print karaganna
app.use((error:Error,req:Request,res:Response)=>{
   res.status(500).json({state:"Error",message:error});
});

db.connect(process.env.MONGO_DB_URL!)
.then(()=>{
    console.log("Connected..!");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running");
        
    })
    
}).catch((Error)=>{
    console.log("Somthing wrong");
    
})