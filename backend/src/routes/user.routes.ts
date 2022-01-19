import { Router } from 'express';
import { UserController } from '../resources/user/user.controller';

const userRouter = Router();
const userController = new UserController();

userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);

export default  userRouter;