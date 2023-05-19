import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes{
   private router:Router=express.Router();
   private controller:CustomerController=new CustomerController();

   constructor(){
    this.configRoutes();
   }

   private configRoutes = (): void => {
      this.router.post("/api/v1/customer",this.controller.saveCustomer);
      this.router.get("/api/v1/customer",this.controller.getAllCustomer);
      this.router.put("/api/v1/customer/:id",this.controller.updateCustomer);
      this.router.delete("/api/v1/customer/:id",this.controller.deleteCustomer);
   };
}