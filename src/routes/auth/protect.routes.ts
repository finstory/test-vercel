import { IRouter, Router, Request, Response } from "express";
import { IUser } from "../../database/mongo/model/User.model";
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from "../../controller/auth/auth.controller";

const router: IRouter = Router();

router.get('/protected',   (req, res) => {
  if (req.isAuthenticated()) {
      // Obtener cookies
      const sessionCookie = req.cookies.session;
      // Enviar la cookie al frontend en formato JSON
      res.json({
          message: `Hola, ${req.user.displayName}`,
          sessionCookie: sessionCookie
      });
  } else {
      res.redirect('/auth/google');
  }
});


export { router as protectedRouter };
