'use strict';

exports.seed = function(knex, Promise) {
  console.log('seedinggggg');
  return knex('userss').insert({user_name: 'Alex2222'});
};