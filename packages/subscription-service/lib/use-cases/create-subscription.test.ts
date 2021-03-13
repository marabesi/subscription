import Campain from '../entities/Campain'
import User from '../entities/Subscription'
import { SubscriptionRepository } from '../repositories/Subscription'
import { CreateSubscription } from './create-subscription'

describe('create subscription use case', () => {
  const subscriptionId = 999
  const repository: SubscriptionRepository = {
    create: (user) => Promise.resolve(999),
    remove: (subscriptionId: number) => Promise.resolve(true),
    find: (subscriptionId: number) => Promise.resolve(true),
    findAll: () => Promise.resolve([]),
  }

  describe('invalid subscription scenarios', () => {

    it('rejects subscription creation without email', async () => {
      await expect(async () => {
        const subscription = new CreateSubscription(repository)

        await subscription.subscribe(new User(
          new Campain(1, 'newsletter'),
          '', '', null, new Date(), false)
        )
      })
      .rejects
      .toThrow('Email is required')
    })
  })

  describe('valid subscription scenarios', () => {
    it('subscription creation without name', async () => {
      const subscription = new CreateSubscription(repository)

      const acceptedSubscription = await subscription.subscribe(new User(
        new Campain(1, 'newsletter'),
        'my@my.com', '', null, new Date(), false))

      expect(acceptedSubscription).toEqual(subscriptionId)
    })

    it('subscription creation without gender', async () => {
      const subscription = new CreateSubscription(repository)

      const acceptedSubscription = await subscription.subscribe(new User(
        new Campain(1, 'newsletter'),
        'my@my.com', '', null, new Date(), false))

      expect(acceptedSubscription).toEqual(subscriptionId)
    })
  })
})