"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_manager_1 = __importDefault(require("../utils/schema-manager"));
const User = (0, schema_manager_1.default)("User", {
    name: { type: String, required: true, immutable: true },
    email: { type: String, required: true },
}, { timestamps: true });
exports.default = User;
//# sourceMappingURL=user.model.js.map