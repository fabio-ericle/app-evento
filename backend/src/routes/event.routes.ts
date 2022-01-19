import { Router } from 'express';
import { userAuthenticated } from '../middlewares/userAuthenticated';
import { EventController } from '../resources/event/event.controller';

const eventRouter = Router();

const eventController = new EventController();

eventRouter.post("/create", userAuthenticated, eventController.create);

export default eventRouter;