import { Request, Response } from 'express';
import { SubscriberServices } from './subscriber.service';

export class SubscriberControllers {
   async subscribe(request: Request, response: Response) {
      const { id = '' } = request.params;
      const subscriberServices = new SubscriberServices();
      const result = await subscriberServices.subscribe(request.user, { id });

      return response.status(200).send(result);
   }
}