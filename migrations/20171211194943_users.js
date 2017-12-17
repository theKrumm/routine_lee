
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) =>{
    table.increments();
    table.string('phone').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.boolean('admin').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
