exports.up = function(knex, Promise) {
    return knex.schema.createTable('riders', (table) =>{
    table.increments();
    table.text('riderName').notNullable();
    table.text('bio');
    table.text('imageURL');
    table.integer('goal').notNullable();
    table.integer('currentTotal').notNullable()
    table.text('team');
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('riders');
  };