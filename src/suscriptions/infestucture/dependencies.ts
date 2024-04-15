import { CreateSubscriptionUseCase } from "../aplication/CreateSubscriptionUseCase";
import { GetSubscriptionUseCase } from "../aplication/GetSubscriptionsUseCase";
import { GetSubscriptionByIdUseCase } from "../aplication/GetSubscriptionByidUseCase";
import { UpdateSubscriptionUseCase } from "../aplication/UpdateSubscriptionUseCase";
import { GetSubscriptionByIdUserUseCase } from "../aplication/GetSubscriptionsByIdUserUseCase";

import { MysqlSubscriptionRepository } from "./MysqlSubscriptionsRepository";

import { CreateSubscriptionController } from "./controllers/CreateSubscriptionCotroller";
import { GetSubscriptionController } from "./controllers/GetSubscriptionsController";
import { GetSubscriptionsByIdController } from "./controllers/GetSubscriptionByIdController";
import { UpdateSubscriptionController } from "./controllers/UpdateSubscriptionController";
import { GetSubscriptionByIdUserController } from "./controllers/GetSubscriptionByIdUserController";


export const mysqlSubscriptionRepository = new MysqlSubscriptionRepository();

export const createSubscriptionUseCase = new CreateSubscriptionUseCase(mysqlSubscriptionRepository);
export const getSubscriptionUseCase = new GetSubscriptionUseCase(mysqlSubscriptionRepository)
export const getSubscriptionByidUseCase = new GetSubscriptionByIdUseCase(mysqlSubscriptionRepository);
export const updateSubscriptionUseCase = new UpdateSubscriptionUseCase(mysqlSubscriptionRepository);
export const getSubscriptionByidUserUseCase = new GetSubscriptionByIdUserUseCase(mysqlSubscriptionRepository);

export const createSubscriptionController = new CreateSubscriptionController(createSubscriptionUseCase);
export const getSubscriptionController = new GetSubscriptionController(getSubscriptionUseCase);
export const getSubscriptionByIdController = new GetSubscriptionsByIdController(getSubscriptionByidUseCase);
export const updateSubscriptionController = new UpdateSubscriptionController(updateSubscriptionUseCase);
export const getSubscriptionByIdUserController = new GetSubscriptionByIdUserController(getSubscriptionByidUserUseCase);
