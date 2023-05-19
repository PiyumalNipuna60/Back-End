import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes{
   private router:Router=express.Router();
   private controller:CustomerController=new CustomerController();

   constructor(){
    this.configRoutes();
   }

   private configRoutes = (): void => {
      this.router.post("/",this.controller.saveCustomer);
      this.router.get("/",this.controller.getAllCustomer);
      this.router.put("/:id",this.controller.updateCustomer);
      this.router.delete("/:id",this.controller.deleteCustomer);
   };

   public getRouter = (): Router => {
    return this.router;
   };
}