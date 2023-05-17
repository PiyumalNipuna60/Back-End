import { Document, Schema, model } from "mongoose";

interface IItem extends Document{
    code:string;
    description:string;
    qtyOnHand:number;
    unitPrice:number;
}

const ItemSchema=new Schema(
{
    code:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        require:true,
    },
    qtyOnHand:{
        type:Number,
        required:true,
    },
    unitPrice:{
        type:Number,
        required:true,
    }
});

export const item=model<IItem>("Item",ItemSchema);