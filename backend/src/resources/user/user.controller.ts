import { Request, Response } from 'express';
import { UserServices } from './user.service';

export class UserController {
   async signUp(request: Request, response: Response) {
      const { name = '', email = '', password = '' } = request.body;
      const userService = new UserServices();
      const user = await userService.signUp({ name, email, password });

      return response.status(201).send(user);
   }

   async signIn(request: Request, response: Response) {
      const { email, password } = request.body;
      const userService = new UserServices();
      const result = await userService.signIn({ email, password });

      return response.status(200).send(result);
   }
}