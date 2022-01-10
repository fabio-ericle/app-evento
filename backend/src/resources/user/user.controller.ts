import { Request, Response } from 'express';
import { UserServices } from './user.service';

export class UserController {
   async signin(request: Request, response: Response) {
      const { name = '', email = '', password = '' } = request.body;
      const userService = new UserServices();
      const user = await userService.signin({ name, email, password });

      return response.status(201).send(user);
   }
}