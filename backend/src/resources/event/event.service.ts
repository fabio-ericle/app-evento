import { randomUUID } from 'crypto';
import { getRepository } from 'typeorm';
import { Event } from '../../entities/Event';
import { User } from '../../entities/User';
import { AppError } from '../../shared/error/AppError';

export class EventService {
   async create(event: Omit<Event, "id" | "createdAt" | "user" | "amountSubscriber">, user: Pick<User, "id">) {
      if(String(event.title).length < 6 || String(event.description).length < 6 || String(event.initedAt).length < 6 || Number.isNaN(Number(event.limit))) {
         throw new AppError("Dados incorretos", 401);
      }

      const userRepository = getRepository(User);
      const currentUser = await userRepository.findOne({ where: { id : user.id } });
      if(!currentUser) {
         throw new AppError("Usuário não encontrado", 401);
      }

      const eventService = getRepository(Event);

      const createEvent = eventService.create({
         id : randomUUID(),
         title : event.title,
         description : event.description,
         createdAt : new Date(),
         initedAt : event.initedAt,
         endAt : event.initedAt,
         limit : Number(Number(event.limit).toFixed()),
      });

      await eventService.save(createEvent);

      return { status : "salvo" };
   }
}