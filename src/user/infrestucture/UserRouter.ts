import express from "express";

import { registerUserController, getUserByEmailController, getUserByIdController, getUsersController} from "./dependencies";

export const userRouter = express.Router();

userRouter.post(
    "/",
    registerUserController.run.bind(registerUserController)
);


userRouter.get(
    "/",
    getUsersController.run.bind(getUsersController)
)

userRouter.get(
    "/email/:email",
    getUserByEmailController.run.bind(getUserByEmailController)
)

userRouter.get(
    "/:id",
    getUserByIdController.run.bind(getUserByIdController)
)



