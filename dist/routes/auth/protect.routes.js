"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = require("express");
const crypto_middleware_1 = require("../../middleware/crypto/crypto.middleware");
const router = (0, express_1.Router)();
exports.protectedRouter = router;
router.get('/protected', (req, res) => {
    const randomValue = (0, crypto_middleware_1.generateRandomValue)(10);
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
    }
    else {
        res.status(401).json({ error: 'No autorizado' });
    }
});
//# sourceMappingURL=protect.routes.js.map