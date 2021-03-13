import { SubscriptionRepository } from '../repositories/Subscription';

export class CancelSubscription {
  constructor(
    private repository: SubscriptionRepository
  ) { }

  async cancel(subscriptionId: number): Promise<boolean> {
    const exists = await this.repository.find(subscriptionId)

    if (exists) {
      return this.repository.remove(subscriptionId)
    }

    throw new Error('Subscription provided does not exists')
  }
}