import { IRouter, Router, Request, Response } from "express";
import { IUser } from "../../database/mongo/model/User.model";
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from "../../controller/auth/auth.controller";

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
  



export { router as protectedRouter };
