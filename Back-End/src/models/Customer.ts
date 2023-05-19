import Module from "module";
import { Document, Schema, model } from "mongoose";

interface ICustomer extends Document{
  id:string;
  name:string;
  address:string;
  salary:number;
}

const CustomerShema= new Schema(
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
  },
});

export const customer=model("Customer",CustomerShema);