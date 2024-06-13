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

route.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const randomValue = generateRandomValue();
  res.cookie("cookie", randomValue, { 
      maxAge: 3600000, // Establece el tiempo de vida de la cookie (en milisegundos), por ejemplo, 1 hora
      httpOnly: true, // Impide que la cookie sea accesible mediante JavaScript en el navegador
      secure: true, // Solo se enviará la cookie a través de HTTPS si esta es verdadera
      sameSite: 'lax' // Restringe el envío de cookies a peticiones del mismo sitio (CSRF protection)
  });
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
  function generateRandomValue() {
    throw new Error("Function not implemented.");
  }

