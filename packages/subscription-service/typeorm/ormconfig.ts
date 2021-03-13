import config from './config'

const {
  DATABASE_HOST,
  DATABASE_TYPE,
  DATABASE_USER,
  DATABASE_PORT,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = config()

export = {
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: false,
  dropSchema: false,
  entities: [
  __dirname + '/entities/**/*.ts'
  ],
  migrations: [
    __dirname + '/migrations/**/*.ts'
  ],
  cli: {
  entitiesDir: __dirname + '/lib/entities',
    migrationsDir: __dirname + '/migrations'
  }
}