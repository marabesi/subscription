import Subscription from '../entities/Subscription';

export interface SubscriptionRepository {
  create: (entity: Subscription) => Promise<number>
  remove: (subscriptionId: number) => Promise<boolean>
  find: (subscriptionId: number) => Promise<Subscription | boolean>
  findAll: () => Promise<Subscription[]>
}