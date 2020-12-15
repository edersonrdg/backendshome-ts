import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('companies', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('phonenumber').notNullable()
    table.integer('cpf').notNullable()
    table.string('office').notNullable()
    table.integer('comp_cnpj').notNullable()
    table.string('comp_name').notNullable()
    table.string('comp_email').notNullable()
    table.integer('comp_phonenumber').notNullable()
    table.string('comp_area').notNullable()

    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('avatar').notNullable()
    table.string('banc_name').notNullable()
    table.string('banc_POU_or_CR').notNullable()
    table.string('banc_operation').notNullable()
    table.boolean('banc_pf').notNullable()
    table.boolean('banc_mei').notNullable()
    table.boolean('adm').notNullable().defaultTo(false)
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('companies')
}  