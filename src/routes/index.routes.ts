import { IRouter, Router } from "express";

const route: IRouter = Router();
// route.use(authRoute);

// route.get("/", authRoute);
// route.get("/", protectedRouter);
// route.get("/", testRoute);

route.get("/", (req, res) => {
  res.send(`
      <h1>Login</h1>
      <a href=/auth/google>Login with Google</a>
    `);
});

export default route;
