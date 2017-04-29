/*jshint esversion: 6*/

/*jshint esversion: 6*/

const express = require('express');

const db = require('./connection');

const articleDataBase = () =>{

  function get(){
    return db.any('SELECT * FROM articles', [true])
      .catch((error) =>{
        console.log(error);
    });
  }

  function getID(id){
    console.log('get id: ' + id);
    newId = id.split('/').join('');
    console.log(newId);
    return db.one(`SELECT * FROM articles WHERE articles.id = ${newId}`)
    .catch((error) =>{
      console.log(error);
    });
  }

  function post ( title, body, author ){
    return db.one(`INSERT INTO articles (title, body, author) VALUES ($1,$2,$3) RETURNING *`, [title, body, author])
      .catch(error =>{
        console.log('Product not found:', error);
    });
  }

function put( title, body, author, id ){
    newId = id.split('/').join('');
    return db.none(`UPDATE articles SET (title, body, author) = ($1, $2, $3) WHERE id = $4`, [title, body, author, newId])
      .catch(error =>{
        console.log('ERROR: ', error);
      });
    }

function deleteArticle(id){
    newId = id.split('/').join('');
    return db.none(`DELETE FROM articles WHERE id = $1`, [newId])
      .catch(error=>{
        console.log('ERROR: ', error);
      });
  }
//

  return{
       get,
       post,
       getID,
       put,
       deleteArticle,
   };
 };

let accessarticles = articleDataBase();
module.exports = accessarticles;

