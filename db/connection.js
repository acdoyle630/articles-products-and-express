/*jshint esversion: 6*/
const pgp = require('pg-promise')();

const db = pgp('postgres://house_user:house@localhost:5432/the_house');

module.exports = db;