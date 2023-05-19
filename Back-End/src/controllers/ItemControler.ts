import { Request, RequestHandler, Response } from "express";

export default class ItemController{

saveItem:RequestHandler=async (
    req:Request,
    res:Response
    ):Promise<Response> => {
       return res;
};


getAllItem:RequestHandler=async (
    req:Request,
    res:Response
    ):Promise<Response> => {
       return res;
};


}