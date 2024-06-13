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

router.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const randomValue = generateRandomValue(10);
  res.cookie("cookie", randomValue, { 
      maxAge: 3600000, // Establece el tiempo de vida de la cookie (en milisegundos), por ejemplo, 1 hora
      httpOnly: false, // Impide que la cookie sea accesible mediante JavaScript en el navegador
      secure: false, // Solo se enviará la cookie a través de HTTPS si esta es verdadera
      sameSite: 'lax' // Restringe el envío de cookies a peticiones del mismo sitio (CSRF protection)
  });
  res.redirect('http://localhost:3400');
});


router.get("/auth/google/unauthorized", (req:Request, res:Response) => {
  res.status(404).json({
      success: false,
      message: 'Login failed',
      user: false
  })
});

router.get("/logout", logoutGet);

export { router as authRoute };

