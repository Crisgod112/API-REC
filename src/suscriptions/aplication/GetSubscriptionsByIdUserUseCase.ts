import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class GetSubscriptionByIdUserUseCase {
  constructor(readonly subscriptionRepository: SubscriptionRepository) {}

  async run(user_id: number): Promise<Subscription[] | null> {
    try {
      const subs = await this.subscriptionRepository.getSubscriptionByIdUser(
        user_id
      );
      return subs;
    } catch (error) {
      return null;
    }
  }
}
