"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../../controller/auth/auth.controller");
const route = (0, express_1.Router)();
exports.authRoute = route;
route.get("/auth/google", auth_controller_1.firstAuthenticate);
route.get("/auth/google/callback", auth_controller_1.secondAuthenticate);
route.get("/auth/google/unauthorized", auth_controller_1.unauthorizedGet);
route.get('/logout', auth_controller_1.logoutGet);
//# sourceMappingURL=auth.routes.js.map