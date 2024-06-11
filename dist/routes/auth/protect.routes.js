"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = require("express");
const isLoggedIn_1 = require("../../middleware/isLoggedIn");
const router = (0, express_1.Router)();
exports.protectedRouter = router;
router.get("/protected", isLoggedIn_1.isLoggedIn, (req, res) => {
    const user = req.user; // Hacemos una conversiÃ³n de tipo
    if (!user ||
        !user.photos ||
        !user.photos.length ||
        !user.emails ||
        !user.emails.length ||
        !user.provider)
        res.status(400).send("User profile is incomplete.");
    //  else  res.status(200).json(user);
    else {
        res.cookie("user", user); // Guarda el usuario en las cookies
        res.redirect("http://localhost:3000/");
    }
    // res.send(`
    //     <img width=80 src="${user.photos[0].value}" />
    //     <h1>Hello ${user.displayName}</h1>
    //     <h4>Your email: ${user.emails[0].value}</h4>
    //     <h4>Your provider: ${user.provider}</h4>
    //     <a href="/logout">Logout</a>
    //   `);
});
//# sourceMappingURL=protect.routes.js.map