exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams', (table) =>{
    table.increments();
    table.text('teamName').notNullable().unique();
    table.text('imageURL')
    table.integer('goalAmount').notNullable();
    table.integer('currentTotal').notNullable();
    table.text('members')
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('teams');
  };