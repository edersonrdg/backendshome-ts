import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('companies', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('phonenumber').notNullable()
    table.string('cpf').notNullable()
    table.string('office').notNullable()

    table.string('comp_cnpj').notNullable()
    table.string('comp_name').notNullable()
    table.string('comp_email').notNullable()
    table.string('comp_phonenumber').notNullable()
    table.string('comp_area').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('companies')
}  