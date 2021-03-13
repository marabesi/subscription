import { createConnection, Connection } from 'typeorm'
import ormconfig = require('./ormconfig')

export default async (
  config: typeof ormconfig = ormconfig
): Promise<Connection> => {
  return await createConnection(config)
}