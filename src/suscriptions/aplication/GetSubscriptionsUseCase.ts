import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";


export class GetSubscriptionUseCase {
    constructor(
        readonly subscriptionrepository: SubscriptionRepository
    ){}

    async run():Promise <Subscription[] | null> {

        try {
            const subs = await this.subscriptionrepository.getAllSubscriptions();
            return subs
        } catch (error) {
            return null
        }
    }
}