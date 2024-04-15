import { CreateSubscriptionUseCase } from "../../aplication/CreateSubscriptionUseCase";
import { Request, Response } from "express";

export class CreateSubscriptionController {
  constructor(readonly createSubscriptionUseCase: CreateSubscriptionUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const subscription = await this.createSubscriptionUseCase.run(
        data.user_id,
        data.plan_expiration
      );

      if (subscription) {
        res.status(201).send({
          status: "succes",
          data: {
            id_subscription: subscription?.id_subscription,
            user_id: subscription?.user_id,
            plan_expiration: subscription?.plan_expiration,
          },
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "No fue posible realizar el registro",
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
