import { IRouter, Router, Request, Response } from "express";
import { IUser } from "../../database/mongo/model/User.model";
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from "../../controller/auth/auth.controller";
import { generateRandomValue } from "../../middleware/crypto/crypto.middleware";

const router: IRouter = Router();

router.get('/protected', (req, res) => {
    const randomValue = generateRandomValue(10);
    res.cookie("cookie", randomValue, { 
        maxAge: 3600000, 
        httpOnly: true, 
        secure: true, 
        sameSite: 'lax' 
    });
  
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
