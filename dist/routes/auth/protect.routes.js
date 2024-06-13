"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.protectedRouter = router;
// router.get('/protected', isLoggedIn, (req: Request, res: Response) => {
//     const user = req.user as IUser; // Hacemos una conversiÃ³n de tipo
//     if (!user || !user.photos || !user.photos.length || !user.emails || !user.emails.length || !user.provider ) {
//         return res.status(400).send('User profile is incomplete.');
//     }
//     res.send(`
//       <img width=80 src="${user.photos[0].value}" />
//       <h1>Hello ${user.displayName}</h1>
//       <h4>Your email: ${user.emails[0].value}</h4>
//       <h4>Your provider: ${user.provider}</h4>
//       <a href="/logout">Logout</a>
//     `)
// });
// router.get("/protected", async(req, res) => {
//   if(req.user){
//       res.status(200).json({
//           success: true,
//           message: 'Login success',
//           user: req.user,
//       })
//   }else{
//       res.status(401).json({
//           success: false,
//           message: 'You are not logged in',
//       })
//   }
// })
router.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        // Obtener la cookie
        // Enviar la cookie al frontend en formato JSON
        res.json({
            message: `Hola, ${req.user.displayName}`,
            cookieValue: "cookieValue"
        });
    }
    else {
        res.redirect('/auth/google');
    }
});
//# sourceMappingURL=protect.routes.js.map