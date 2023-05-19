import  Express, { Router }  from "express";
import ItemController from "../controllers/ItemControler";

export default class ItemRoutes{
  private router: Router=Express.Router();
  private controller: ItemController = new ItemController();

  

}