
import { IRouter, Router } from "express";
import User from "../database/mongo/model/user.model";


const route: IRouter = Router();
// route.use(authRoute);

// route.get("/", authRoute);
// route.get("/", protectedRouter);
// route.get("/", testRoute);

route.get("/", async (req, res) => {
  const user = await User.findOne({ email: "facu@hotmail.com" });
  res.send(user);
});

export default route;
