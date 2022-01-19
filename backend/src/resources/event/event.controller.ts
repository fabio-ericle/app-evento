import { Request, Response } from 'express';
import { EventService } from './event.service';

export class EventController {
   async create(request: Request, response: Response) {
      const { title = '', description = '', initedAt = '', endAt = '', limit = -1 } = request.body;
      const eventService = new EventService();
      const event = await eventService.create({ title, description, initedAt, endAt, limit }, request.user);

      return response.status(201).send(event);
   }
}