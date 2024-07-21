"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
// route.use(authRoute);
// route.get("/", authRoute);
// route.get("/", protectedRouter);
// route.get("/", testRoute);
route.get("/", (req, res) => {
    res.send(`
      <h1>Login</h1>
      <a href=/auth/google>Login with Google</a>
    `);
});
exports.default = route;
//# sourceMappingURL=index.routes.js.map