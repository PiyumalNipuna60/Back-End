import { Request, RequestHandler, Response } from "express";

export default class CustomerController{
      saveCustomer:RequestHandler = async (
        req:Request,
        res:Response
        ):Promise<Response> => {
           return res;
      };

      getAllCustomer:RequestHandler=async (
        req:Request,
        res:Response
        ):Promise<Response> => {
           return res;
      };

      updateCustomer:RequestHandler=async (
        req:Request,
        res:Response
        ):Promise<Response> => {
           return res;
      };

      deleteCustomer:RequestHandler=async (
        req:Request,
        res:Response
      ):Promise<Response> => {
        return res;
      }
}