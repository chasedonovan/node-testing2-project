/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
  exports.seed = function(knex) {
  return knex('characters').del()
    .then(function() {
        return knex('characters').insert([
    {name: 'Eric Cartman'},
    {name: 'Stan Marsh'},
    {name: 'Kyle Broflovski'},
    {name: 'Kenny McCormick'},
    ])
  })
};
