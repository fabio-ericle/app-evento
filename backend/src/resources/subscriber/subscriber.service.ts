import { getRepository } from 'typeorm';
import { Event } from '../../entities/Event';
import { Subscriber } from '../../entities/Subscriber';
import { User } from '../../entities/User';
import { AppError } from '../../shared/error/AppError';

export class SubscriberServices {
   async subscribe(user: Pick<User, "id">, event: Pick<Event, "id">) {
      if(String(user.id).length < 10 || String(event.id).length < 10) {
         throw new AppError("Dados incorretos", 401);
      }

      const userRepository = getRepository(User);
      const currentUser = await userRepository.findOne({ where: { id : user.id } }) as Pick<User, "id">;
      if(!currentUser) {
         throw new AppError("Usuário não encontrado", 401);
      }

      const eventRepository = getRepository(Event);
      const currentEvent = await eventRepository.findOne({ where : { id : event.id } });
      if(!currentEvent) {
         throw new AppError("Evento não encotrado", 401);
      }

      if(currentEvent.amountSubscriber === currentEvent.limit) {
         throw new AppError("Evento já está cheio", 401);
      }

      const subscribeRepository = getRepository(Subscriber);

      const currentSubscribe = await subscribeRepository.findOne({ where : { id_evento : event.id, id_user : user.id } });
      if(currentSubscribe) {
         throw new AppError("Usuário já está cadastrado", 401);
      }

      const subscribeDate = subscribeRepository.create({
         id_user : currentUser.id,
         id_evento : currentEvent.id,
      });

      await subscribeRepository.save(subscribeDate);
      currentEvent.amountSubscriber += 1;

      await eventRepository.save(currentEvent);

      return { status : 'salvo' };
   }
}