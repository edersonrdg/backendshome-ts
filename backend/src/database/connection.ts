import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'password',
    database : 'shomedb'
  },
})

export default db