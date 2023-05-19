import { count } from "console";
import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";

const router:Router = Router();

router.use("/api/v1/customer",new CustomerRoutes().getRouter());
