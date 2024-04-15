import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class CreateSubscriptionUseCase {
  constructor(readonly susbcriptionRepository: SubscriptionRepository) {}

  async run( user_id: number, plan_expiration: string):Promise<Subscription | null> {
    try {
      const subscription = this.susbcriptionRepository.createSubscription(
        user_id,
        plan_expiration
      );
      return subscription;
    } catch (error) {
      return null;
    }
  }
}
