import express from "express";

export const subscriptionsRouter = express.Router();

import { createSubscriptionController, getSubscriptionController, getSubscriptionByIdController, updateSubscriptionController, getSubscriptionByIdUserController } from "./dependencies";

subscriptionsRouter.get(
    "/",
    getSubscriptionController.run.bind(getSubscriptionController)
)

subscriptionsRouter.get(
    "/:id_subscription",
    getSubscriptionByIdController.run.bind(getSubscriptionByIdController)
)

subscriptionsRouter.get(
    "/user/:user_id",
    getSubscriptionByIdUserController.run.bind(getSubscriptionByIdUserController)
)

subscriptionsRouter.post(
    "/",
    createSubscriptionController.run.bind(createSubscriptionController)
)

subscriptionsRouter.put(
    "/",
    updateSubscriptionController.run.bind(updateSubscriptionController)
)



