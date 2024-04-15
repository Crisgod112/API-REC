import { GetUSerByIdUseCase } from "../aplication/GetUserByIdUseCase";
import { GetUsersUseCases } from "../aplication/GetUsersUseCase";
import { GetUserByEmailUseCase } from "../aplication/GetUserByEmailUseCase";
import { RegisterUserUseCase } from "../aplication/RegisterUserUseCase";

//services
// mqpp

import { MysqlUserRepository } from "./MysqlUserRepository";


import { GetUserByEmailController } from "./controllers/GetUserByEmailController";
import { RegisterUserController } from "./controllers/RegisterUserController";
import { GetUsersController } from "./controllers/GetUsersController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";


//services

export const mysqlUserRepository = new MysqlUserRepository ();
export const getUserByEmailUseCase = new GetUserByEmailUseCase(mysqlUserRepository);
export const getUserByIdUseCase = new GetUSerByIdUseCase(mysqlUserRepository);
export const getUsersUseCase = new GetUsersUseCases ( mysqlUserRepository);
export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);

export const registerUserController = new RegisterUserController(registerUserUseCase);
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase);
export const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);
export const getUsersController = new GetUsersController(getUsersUseCase);
