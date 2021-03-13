import { Connection } from 'typeorm'
import { SubscriptionRepository } from '../../lib/repositories/Subscription';
import Entity from '../../lib/entities/Subscription';
import { SubscriptionEntity } from '../entities'

export class Subscription implements SubscriptionRepository {
  constructor(
    private connection: Connection
  ) { }

  find(subscriptionId: number): Promise<boolean> {
    throw new Error('Method not implemented')
  }

  findAll(): Promise<Entity[]> {
    throw new Error('Method not implemented')
  }

  remove(subscriptionId: number): Promise<boolean> {
    throw new Error('Method not implemented')
  }

  async create(entity: Entity): Promise<number> {
    const { id } = await this.connection.getRepository(
      SubscriptionEntity
    ).save({
      name: entity.getName(),
      email: entity.getEmail(),
      gender: entity.getGender(),
      dateOfBirth: entity.getDateOfBirth(),
      consent: entity.getConsent(),
    })
    return id
  }
}