import express  from "express";
import db from "mongoose";

const app=express();



db.connect("mongodb+srv://nipuna:1234@test01.kxnbmvm.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected..!");
    
    
}).catch((Error)=>{
    console.log("Somthing wrong");
    
})