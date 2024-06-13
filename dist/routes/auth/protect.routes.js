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
        res.json({ cookieValue });
    }
    else {
        res.status(401).json({ error: 'No autorizado' });
    }
});
//# sourceMappingURL=protect.routes.js.map