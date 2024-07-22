import { IRouter, Router, Request, Response } from "express";
import User from "../databases/mongoose/model/user.model";
import controllers from "../controllers/user.controller";
const router: IRouter = Router();

//% Recibe un usuario:
router.get("/:email", controllers.getUserByEmail);
router.post("/", controllers.postUser);

export default router;
