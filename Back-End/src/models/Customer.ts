import { Document, Schema, model } from "mongoose";

interface ICustomer extends Document{
    id:string;
   name:string;
   address:string;
   salary:number;
}

const CustomerSchema = new Schema(
  {

    id:{
        type:String,
        required:true,
    },
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

export const customer=model<ICustomer>("Customer",CustomerSchema);