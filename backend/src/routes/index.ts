import { Router } from 'express';
import eventRouter from './event.routes';
import subscribeRouter from './subscribe.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use("/user", userRouter);
routes.use("/event", eventRouter);
routes.use(subscribeRouter);

export default routes;