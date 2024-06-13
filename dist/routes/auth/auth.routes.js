"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../../controller/auth/auth.controller");
const router = (0, express_1.Router)();
exports.authRoute = router;
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["email", "profile"] }));
const sockets_1 = require("../../sockets");
router.get("/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/" }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cookieValue = req.headers['cookie'];
        (0, sockets_1.sendCookies)(cookieValue);
        res.redirect("http://localhost:3001/");
    }
    catch (error) {
        console.error(error);
    }
}));
router.get("/auth/google/unauthorized", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Login failed",
        user: false,
    });
});
router.get("/logout", auth_controller_1.logoutGet);
//# sourceMappingURL=auth.routes.js.map