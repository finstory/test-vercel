"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../../controller/auth/auth.controller");
const crypto_middleware_1 = require("../../middleware/crypto/crypto.middleware");
const router = (0, express_1.Router)();
exports.authRoute = router;
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["email", "profile"] }));
router.get("/auth/google/callback", passport_1.default.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    const randomValue = (0, crypto_middleware_1.generateRandomValue)(10);
    res.cookie("cookie", randomValue, {
        maxAge: 3600000,
        httpOnly: true,
        secure: true,
        sameSite: 'lax' // Restringe el envío de cookies a peticiones del mismo sitio (CSRF protection)
    });
    res.redirect('/protected');
});
router.get("/auth/google/unauthorized", (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Login failed',
        user: false
    });
});
router.get("/logout", auth_controller_1.logoutGet);
//# sourceMappingURL=auth.routes.js.map