import { Document, Schema, model } from "mongoose";



const CustomerSchema = new Schema(
  {
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
  }
);

export const customer=model<>("Customer",CustomerSchema);