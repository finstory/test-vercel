import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { envs } from "../../config/plugin/env-var";
import { IUser } from "../../database/mongo/model/User.model";
