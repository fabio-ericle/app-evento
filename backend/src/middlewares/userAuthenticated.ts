import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Ipayload {
   sub: string;
}

export function userAuthenticated(request: Request, response: Response, next: NextFunction) {
   
   const authToken = request.headers.authorization;
   if(!authToken) {
      return response.status(401).json({ 
         "status" : "unauthorized", 
      }).end();
   }

   const [, token] = authToken.split(" ");

   try {
      const { sub } = verify(token, process.env.SECRECT_KEY) as Ipayload;

      request.user = {
         id : sub,
      };

      return next();
   } catch (error) {
      return response.status(401).json({
         "status" : "unauthorized",
      }).end();
   }
}