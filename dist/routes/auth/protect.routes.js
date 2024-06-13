"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.protectedRouter = router;
router.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        // Obtener la cookie
        const cookieValue = req.cookies.cookie;
        // Enviar la cookie al frontend en formato JSON
        res.json({
            message: `Hola, ${req.user.displayName}`,
            cookieValue: cookieValue
        });
    }
    else {
        res.redirect('/auth/google');
    }
});
//# sourceMappingURL=protect.routes.js.map