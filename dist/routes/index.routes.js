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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../routes/auth/auth.routes");
const protect_routes_1 = require("../routes/auth/protect.routes");
const test_routes_1 = require("./test/test.routes");
const request_ip_middleware_1 = require("../middleware/request-ip/request-ip.middleware");
const route = (0, express_1.Router)();
route.use(auth_routes_1.authRoute);
route.use(protect_routes_1.protectedRouter);
route.use(test_routes_1.testRoute);
route.get("/", auth_routes_1.authRoute);
route.get("/", protect_routes_1.protectedRouter);
route.get("/", test_routes_1.testRoute);
route.get("/", (req, res) => {
    res.send(`
      <h1>Login</h1>
      <a href=/auth/google>Login with Google</a>
    `);
});
route.get("/ip", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = req.ip;
        res.status(200).json(yield (0, request_ip_middleware_1.getGeoInfo)(ip));
    }
    catch (error) {
        res.status(401).json({ msg: "error que se yo" });
    }
}));
exports.default = route;
//# sourceMappingURL=index.routes.js.map