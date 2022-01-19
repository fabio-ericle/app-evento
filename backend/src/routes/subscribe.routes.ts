import { Router } from 'express';
import { SubscriberControllers } from '../resources/subscriber/subscriber.controller';

const subscribeRouter = Router();

const subscriberControllers = new SubscriberControllers();

subscribeRouter.post("/subscribe", subscriberControllers.subscribe);

export default subscribeRouter;