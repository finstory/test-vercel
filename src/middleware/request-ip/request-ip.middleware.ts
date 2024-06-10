import { Request, Response } from "express"
import axios from "axios"
import { IUser } from "../../database/mongo/model/User.model";
import { envs } from "../../config/plugin/env-var";

declare module 'express-serve-static-core' {
    interface Request {
      user?: IUser;
    }
  }


export const addressIp = (req: Request): string | null => {
    // const ip = requestIp.getClientIp(req);
    const ip = req.ip
    return ip;
  };
  

 export const getGeoInfo = async (req: Request) => {
    const apiKey = envs.IPDATA_KEY
    const { user } = req;
    if (!user) {
      throw new Error('User is undefined');
    }
  
    const ipClient: any = addressIp(req);
    if (!ipClient) {
      throw new Error('IP address not found');
    }
    
    const url = `https://api.ipdata.co/${ipClient}?api-key=${apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching geolocation: ${error}`);
      return null;
    }
  };