import path from 'path'
require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'password',
    database : 'shomedb'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
}