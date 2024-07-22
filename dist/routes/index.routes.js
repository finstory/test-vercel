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
const express_1 = require("express");
const user_model_1 = __importDefault(require("../database/mongo/model/user.model"));
const route = (0, express_1.Router)();
// route.use(authRoute);
// route.get("/", authRoute);
// route.get("/", protectedRouter);
// route.get("/", testRoute);
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("work");
}));
route.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: "facu@hotmail.com" });
    res.send(user);
}));
exports.default = route;
//# sourceMappingURL=index.routes.js.map