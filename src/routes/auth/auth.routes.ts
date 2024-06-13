import { IRouter, Router, Request, Response } from "express";
import passport from "passport";
import {
  firstAuthenticate,
  logoutGet,
  secondAuthenticate,
  unauthorizedGet,
} from "../../controller/auth/auth.controller";

const route: IRouter = Router();

route.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

route.get("/auth/google/callback",  passport.authenticate('google', { failureRedirect: '/' }),
(req, res) => {
    res.redirect('http://localhost:3000/');
});


route.get("/auth/google/unauthorized", (req:Request, res:Response) => {
  res.status(404).json({
      success: false,
      message: 'Login failed',
      user: false
  })
});

route.get("/logout", logoutGet);

export { route as authRoute };
