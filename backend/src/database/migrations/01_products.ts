import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('category').notNullable()
    table.integer('price').notNullable()
    table.string('image').notNullable()

    table.integer('company_id').notNullable()
      .references('id').inTable('companies')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
} 

export async function down(knex: Knex) {
  return knex.schema.dropTable('products')
}  