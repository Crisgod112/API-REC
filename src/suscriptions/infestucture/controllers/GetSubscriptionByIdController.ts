import { GetSubscriptionByIdUseCase } from "../../aplication/GetSubscriptionByidUseCase";
import { Subscription } from "../../domain/Suscriptions";
import { Request, Response } from "express";

export class GetSubscriptionsByIdController {
  constructor(
    readonly getSubscriptionByIdUseCase: GetSubscriptionByIdUseCase
  ) {}

  async run(req: Request, res: Response) {
    const id_subscription: number = parseInt(req.params.id_subscription);
    try {
      const sub = await this.getSubscriptionByIdUseCase.run(id_subscription);
      if (sub) {
        res.status(201).send({
            status:"succses",
            data:{
                id_subscription : sub.id_subscription,
                user_id : sub.user_id,
                plan_expiration: sub.plan_expiration
            }
        })
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
