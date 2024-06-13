"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../../controller/auth/auth.controller");
const route = (0, express_1.Router)();
exports.authRoute = route;
route.get("/auth/google", passport_1.default.authenticate("google", { scope: ["email", "profile"] }));
route.get("/auth/google/callback", passport_1.default.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('http://localhost:3000/');
});
route.get("/auth/google/unauthorized", (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Login failed',
        user: false
    });
});
route.get("/logout", auth_controller_1.logoutGet);
//# sourceMappingURL=auth.routes.js.map