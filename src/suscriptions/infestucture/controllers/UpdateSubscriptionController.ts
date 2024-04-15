import { Subscription } from "../../domain/Suscriptions";
import { UpdateSubscriptionUseCase } from "../../aplication/UpdateSubscriptionUseCase";
import { Request, Response } from "express";

export class UpdateSubscriptionController {
  constructor(readonly updateSubscriptionUseCase: UpdateSubscriptionUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {

      const sub = await this.updateSubscriptionUseCase.run(
        data.id_subscription,
        data.user_id,
        data.plan_expiration
      );
      if (sub) {
        res.status(201).send({
          status: "succes update",
          data: {
            id_subscription: sub?.id_subscription,
            user_id: sub?.user_id,
            plan_expiration: sub?.plan_expiration,
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
