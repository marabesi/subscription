import Campain from '../entities/Campain'
import User from '../entities/Subscription'
import { SubscriptionRepository } from '../repositories/Subscription'
import { CancelSubscription } from './cancel-subscription'

describe('cancel subscription use case', () => {

  it('should not allow to cancel subscription that does not exists', async () => {
    const repository: SubscriptionRepository = {
      create: (user) => Promise.resolve(1),
      remove: (subscriptionId: number) => Promise.resolve(true),
      findAll: () => Promise.resolve([]),
      find: (subscriptionId: number) => Promise.resolve(false)
    }

    await expect(async () => {
      const subscription = new CancelSubscription(repository)
      const subscriptionId: number = 10;
      const user = new User(
        new Campain(1, 'newsletter'),
        '', '', null, new Date(), false)

      await subscription.cancel(subscriptionId)
    })
    .rejects
    .toThrow('Subscription provided does not exists')
  })

  it('should remove subscription', async () => {
    const repository: SubscriptionRepository = {
      create: (user) => Promise.resolve(1),
      remove: (subscriptionId: number) => Promise.resolve(true),
      findAll: () => Promise.resolve([]),
      find: (subscriptionId: number) => Promise.resolve(true)
    }

    const subscription = new CancelSubscription(repository)
    const subscriptionId: number = 10;
    const user = new User(
      new Campain(1, 'newsletter'),
      '', '', null, new Date(), false)

    const findSpy = jest.spyOn(repository, 'find')
    const findCancel = jest.spyOn(repository, 'remove')

    await subscription.cancel(subscriptionId)

    expect(findSpy).toBeCalledWith(subscriptionId)
    expect(findCancel).toBeCalledWith(subscriptionId)
  })
})