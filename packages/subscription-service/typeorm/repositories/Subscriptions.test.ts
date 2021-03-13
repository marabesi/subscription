import { Connection } from 'typeorm'
import { Subscription } from './Subscription'
import Entity, { Gender } from '../../lib/entities/Subscription'
import Campain from '../../lib/entities/Campain'
import connection from '../connection'
import ormconfig = require('../ormconfig')

describe('typeorm subscription repository', () => {

  let conn: Connection

  beforeEach(async () => {
    conn = await connection({
      ...ormconfig,
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      dropSchema: true
    })
  })

  afterEach(async () => {
    await conn.close()
  })

  it('should save subscription', async () => {
    const subscription = new Entity(new Campain(
      1,
      'newsletter'
    ), 'my@my.com', 'my name', Gender.FEMALE, new Date(), true)

    const connectionSpy = jest.spyOn(conn, 'getRepository')
    
    const repository = new Subscription(conn)
    await repository.create(subscription)

    expect(connectionSpy).toHaveBeenCalled()
  })
})