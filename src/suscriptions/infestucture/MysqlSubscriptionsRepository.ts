import { query } from "../../db/mysql";
import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class MysqlSubscriptionRepository implements SubscriptionRepository {
  async getSubscriptionByid(
    id_subscription: number
  ): Promise<Subscription | null> {
    const sql = "SELECT * FROM subscriptions WHERE id_subscription=?";
    const params: any[] = [id_subscription];
    try {
      const [result]: any = await query(sql, params);
      return new Subscription(
        result[0].id_subscription,
        result[0].user_id,
        result[0].plan_expiration
      );
    } catch (error) {
      return null;
    }
  }

  async getAllSubscriptions(): Promise<Subscription[] | null> {
    const sql = "SELECT * FROM subscriptions";
    try {
      const [data]: any = await query(sql, []);
      const dataSubs = Object.values(JSON.parse(JSON.stringify(data)));
      return dataSubs.map(
        (subscription: any) =>
          new Subscription(
            subscription.id_subscription,
            subscription.user_id,
            subscription.plan_expiration
          )
      );
    } catch (error) {
      return null;
    }
  }
  async getSubscriptionByIdUser(
    user_id: number
  ): Promise<Subscription[] | null> {
    const sql = "SELECT * FROM subscriptions WHERE user_id =?";
    try {
      const [data]: any = await query(sql, [user_id]);
      const dataSubs = Object.values(JSON.parse(JSON.stringify(data)));
      return dataSubs.map(
        (subscription: any) =>
          new Subscription(
            subscription.id_subscription,
          
            subscription.user_id,
            subscription.plan_expiration
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createSubscription(
    user_id: number,
    plan_expiration: string
  ): Promise<Subscription | null> {
    let subscription = null;
    const sql =
      "INSERT INTO subscriptions (user_id,plan_expiration) VALUES (?,?)";
    const params: any[] = [ user_id, plan_expiration];
    try {
      const [subscriptionR]: any = await query(sql, params);
      subscription = new Subscription(
        subscriptionR.id,
        user_id,
        plan_expiration
      );
    } catch (error) {
      subscription = null;
    } finally {
      return subscription;
    }
  }

  async updateSubscription(
    id_subscription: number,
    user_id: number,
    plan_expiration: string
  ): Promise<Subscription | null> {
    let subscription = null;
    console.log(plan_expiration)
    const sql =
      "UPDATE subscriptions SET user_id = ?, plan_expiration = ? WHERE id_subscription = ?";
    const params: any[] = [
      
      user_id,
      plan_expiration,
      id_subscription
    ];
    try {
      const [subscriptionR]: any = await query(sql, params);
      subscription = new Subscription(
        id_subscription,
        user_id,
        plan_expiration
      );
    } catch (error) {
      subscription = null;
    } finally {
      return subscription;
    }
  }
  async deleteSubscription(id: number): Promise<Subscription | null> {
    throw new Error("Method not implemented.");
  }
}
