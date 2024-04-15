import { Subscription } from "../Suscriptions";

export interface SubscriptionRepository {
  getSubscriptionByid(id_subscription: number): Promise<Subscription | null>;
  getSubscriptionByIdUser(user_id: number): Promise<Subscription[] | null>;
  getAllSubscriptions(): Promise<Subscription[] | null>;
  createSubscription(
    user_id: number,
    plan_expiration: string
  ): Promise<Subscription | null>;
  updateSubscription(
    id_subscription: number,
    user_id: number,
    plan_expiration: string
  ): Promise<Subscription | null>;
  deleteSubscription(id_subscription: number): Promise<Subscription | null>;
}
