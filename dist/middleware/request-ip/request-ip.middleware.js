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
exports.getGeoInfo = exports.addressIp = void 0;
const axios_1 = __importDefault(require("axios"));
const env_var_1 = require("../../config/plugin/env-var");
const addressIp = (req) => {
    // const ip = requestIp.getClientIp(req);
    const ip = req.ip;
    return ip;
};
exports.addressIp = addressIp;
const getGeoInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = env_var_1.envs.IPDATA_KEY;
    const ip = req.ip;
    console.log(ip);
    // const ipClient: any = addressIp(req);
    // if (!ipClient) {
    //   throw new Error('IP address not found');
    // }
    const url = `https://api.ipdata.co/${ip}?api-key=${apiKey}`;
    console.log(url);
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching geolocation: ${error}`);
        return null;
    }
});
exports.getGeoInfo = getGeoInfo;
//# sourceMappingURL=request-ip.middleware.js.map