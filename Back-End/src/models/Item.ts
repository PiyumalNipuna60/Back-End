import { Document, Schema, model } from "mongoose";

interface IItem extends Document{
    code:string;
    description:string;
    qtyOnHand:string;
    unitPrice:string;
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
        type:String,
        required:true,
    },
    unitPrice:{
        type:String,
        required:true,
    }
});

export const item=model<IItem>("Item",ItemSchema);