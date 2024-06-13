import { IRouter, Router, Request, Response } from "express";
import passport from "passport";
import {
  firstAuthenticate,
  logoutGet,
  secondAuthenticate,
  unauthorizedGet,
} from "../../controller/auth/auth.controller";
import { generateRandomValue } from "../../middleware/crypto/crypto.middleware";

const router: IRouter = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

import fs from "fs";
import { sendCookies } from "../../sockets";
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  async (req, res) => {
    try {

      const cookieValue = req.headers['cookie'];
       sendCookies(cookieValue);
      res.redirect("http://localhost:3001/")
    } catch (error) {
      console.error(error);
    }
  }
);

router.get("/auth/google/unauthorized", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Login failed",
    user: false,
  });
});

router.get("/logout", logoutGet);

export { router as authRoute };
