import { Router } from 'express';
import { userAuthenticated } from '../middlewares/userAuthenticated';
import { UserController } from '../resources/user/user.controller';

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signin", userController.signUp);
userRouter.post("/signin", userAuthenticated, userController.signIn);

export default  userRouter;