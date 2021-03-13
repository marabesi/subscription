interface DatabaseConnection {
  DATABASE_HOST: string
  DATABASE_TYPE: 'mysql' | 'sqlite'
  DATABASE_USER: string
  DATABASE_PORT: number
  DATABASE_PASSWORD: string
  DATABASE_NAME: string
}

const config = function(): DatabaseConnection {
  return {
    DATABASE_HOST: process.env.DATABASE_HOST || '',
    DATABASE_TYPE: 'mysql',
    DATABASE_USER: process.env.DATABASE_USER || '',
    DATABASE_PORT: parseInt(process.env.DATABASE_PORT) || 3306,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE_NAME: process.env.DATABASE_NAME || ''
  }
}

export default config