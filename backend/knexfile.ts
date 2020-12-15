import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'password',
    database : 'dbshome'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
}