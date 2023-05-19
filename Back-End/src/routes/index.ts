import { count } from "console";
import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";
import ItemRoutes from "./ItemRoutes";

const router:Router = Router();

const baseUrl = "/api/v1";

router.use(`${baseUrl}/customer`,new CustomerRoutes().getRouter());
router.use(`${baseUrl}/item`,new ItemRoutes().getRouter());


export default router;