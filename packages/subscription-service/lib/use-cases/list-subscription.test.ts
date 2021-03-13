import Campain from '../entities/Campain'
import Subscription from '../entities/Subscription'
import { SubscriptionRepository } from '../repositories/Subscription'
import { ListSubscription } from './list-subscription'

describe('list subscription use case', () => {
  it('should fetch all subscriptions', async () => {
    const repository: SubscriptionRepository = {
      create: (user) => Promise.resolve(1),
      remove: (subscriptionId: number) => Promise.resolve(true),
      find: (subscriptionId: number) => Promise.resolve(false),
      findAll: () => Promise.resolve([]),
    }

    const subscription = new ListSubscription(repository)

    const spyFindAll = jest.spyOn(repository, 'findAll')

    const list = await subscription.fetch()

    expect(spyFindAll).toHaveBeenCalled()
    expect(list.length).toEqual(0)
  })

  it('should fetch a single subscription', async () => {
    const subscription: Subscription = new Subscription(
      new Campain(1, 'newsletter'),
      'my@my.com', '', null, new Date(), true
    )
    const subscriptionId = 10
    const repository: SubscriptionRepository = {
      create: (user) => Promise.resolve(999),
      remove: (subscriptionId: number) => Promise.resolve(true),
      find: (subscriptionId: number) => Promise.resolve(subscription),
      findAll: () => Promise.resolve([]),
    }

    const spyFind = jest.spyOn(repository, 'find')

    const subscriptionList = new ListSubscription(repository)

    await subscriptionList.fetchFor(subscriptionId)

    // expect(
    // ).toBe(subscription)

    expect(spyFind).toHaveBeenCalledWith(subscriptionId)
  })
})