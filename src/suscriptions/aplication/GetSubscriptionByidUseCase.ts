import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";


export class GetSubscriptionByIdUseCase {

    constructor(
        readonly subscriptionRepository: SubscriptionRepository
    ){}

    async run (id_subscription: number):Promise <Subscription| null>{
        try {
            const subs = await this.subscriptionRepository.getSubscriptionByid(id_subscription);
            return subs
        } catch (error) {
            return null
        }
    }
}