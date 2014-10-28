'use strict';

var knex = require('knex')({
  dialect: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  }
});

knex.insert({user_name: 'Alex'}).into('userss').then(function () {
  knex('userss').select('*').map(function (row) {
    console.log(row);
  })
    .catch(function (e) {
      console.log(e);
    });
});

