import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();

routes.get("/Users", UserController.find);
routes.post("/User", UserController.create);

export default routes;
