import { IRouter, Router, Request, Response } from "express";
import { IUser } from "../../database/mongo/model/User.model";
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from "../../controller/auth/auth.controller";
import { generateRandomValue } from "../../middleware/crypto/crypto.middleware";

const router: IRouter = Router();

router.get('/protected', (req, res) => {

  
    if (req.isAuthenticated()) {
        // Obtener la cookie
        const cookieValue = req.cookies.cookie;
        // Enviar la cookie al frontend en formato JSON
        res.json({ cookieValue });
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

router.get("/profile", async(req, res) => {
      if(req.user){
          res.status(200).json({
              success: true,
              message: 'Login success',
              user: req.user,
          })
      }else{
          res.status(401).json({
              success: false,
              message: 'You are not logged in',
          })
      }
    })



export { router as protectedRouter };
