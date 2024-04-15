import { GetSubscriptionByIdUserUseCase } from "../../aplication/GetSubscriptionsByIdUserUseCase";
import { Request, Response } from "express";

export class GetSubscriptionByIdUserController {
  constructor(readonly getSubscriptionByIdUserUseCase: GetSubscriptionByIdUserUseCase) {}
  async run(req: Request, res: Response) {
    const user_id: number = parseInt(req.params.user_id);
    try {
      const subs = await this.getSubscriptionByIdUserUseCase.run(user_id);
      if (subs) {
        res.status(201).send({
          status: "succes",
          data: subs.map((subs: any) => {
            return {
              id_subscription: subs.id_subscription,
              users_id: subs.user_id,
              plan_expiration: subs.plan_expiration,
            };
          }),
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema ",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
