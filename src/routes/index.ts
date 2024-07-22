import { IRouter, Router } from "express";
import User from "../databases/mongoose/model/user.model";
import UserRoute from "./user.route";

const route: IRouter = Router();

route.use("/user", UserRoute);

route.get("/", async (req, res) => {
  res.send("working");
});

export default route;
