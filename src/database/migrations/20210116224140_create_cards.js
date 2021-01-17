exports.up = function(knex) {
  return knex.schema.createTable('cards', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.string('brand').notNullable();
    table.string('category').notNullable();
    table.string('limit').notNullable();
    table.string('fee').notNullable();
    table.string('image').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};
