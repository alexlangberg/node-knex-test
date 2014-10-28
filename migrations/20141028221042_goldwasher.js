'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('userss', function(table) {
    table.increments('id');
    table.string('user_name');
  }).then(Promise.resolve());
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('userss').then(Promise.resolve());
};
