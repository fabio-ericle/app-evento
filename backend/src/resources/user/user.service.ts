import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { AppError } from '../../shared/error/AppError';

export class UserServices {
   async signUp(user: Partial<User>) {
      if(typeof user.name !== 'string' || typeof user.email !== 'string' || typeof user.password !== 'string') {
         throw new AppError("Informações iválidas, tente reinvia-las", 401);
      }
      if(user.name.length < 6 || user.email.length < 6 || user.password.length < 6) {
         throw new AppError("As informações não antendem aos requisitos, tente enviá-las novamente", 401);
      }

      const userRepository = getRepository(User);

      const currentUser = await userRepository.findOne({ where: { email : user.email } });
      if(currentUser) {
         throw new AppError("Esse e-mail já está em uso", 401);
      }

      const passwordHash = await hash(user.password, 8);

      const createUser = userRepository.create({
         id : randomUUID(),
         name : user.name,
         email : user.email,
         password : passwordHash,
      });

      await userRepository.save(createUser);

      const token = sign({ name : user.name, email : user.email }, 
         process.env.TOKEN, { subject: createUser.id, expiresIn: "14d",
      });

      return { token : token };
   }

   async 
}