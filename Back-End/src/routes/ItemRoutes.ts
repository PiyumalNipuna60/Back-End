import  Express, { Router }  from "express";
import ItemController from "../controllers/ItemControler";

export default class ItemRoutes{
  private router: Router=Express.Router();
  private controller: ItemController = new ItemController();

  constructor(){
    this.configRouter();
  }

  private configRouter=():void => {
    this.router.post("/api/v1/item",this.controller.saveItem);
    this.router.get("/api/v1/item",this.controller.getAllItem);
    this.router.put("/api/v1/item/:id",this.controller.updateItem);
    this.router.delete("/api/v1/item/:id",this.controller.deleteItem);
  }

}