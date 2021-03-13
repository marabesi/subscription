import User from '../entities/Subscription';
import { SubscriptionRepository } from '../repositories/Subscription';

export class CreateSubscription {
  constructor(
    private repository: SubscriptionRepository
  ) { }

  subscribe(user: User): Promise<number> {
    if (!user.getEmail()) {
      throw new Error('Email is required')
    }

    return this.repository.create(user)
  }
}