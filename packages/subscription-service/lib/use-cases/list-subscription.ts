import Subscription from '../entities/Subscription';
import { SubscriptionRepository } from '../repositories/Subscription';

export class ListSubscription {
  constructor(
    private repository: SubscriptionRepository
  ) { }

  fetch(): Promise<Subscription[]> {
    return this.repository.findAll()
  }

  async fetchFor(subscriptionId: number): Promise<Subscription | boolean> {
    const find = await this.repository.find(subscriptionId)
    if (find) {
      return find
    }
  }
}