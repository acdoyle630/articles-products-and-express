/*jshint esversion: 6*/

const express = require('express');

const db = require('./connection');

const productDataBase = () =>{

  function get(){
    return db.any('SELECT * FROM products', [true])
      .catch((error) =>{
        console.log(error);
    });
  }

  function getID(id){
    console.log('get id: ' + id);
    newId = id.split('/').join('');
    console.log(newId);
    return db.one(`SELECT * FROM products WHERE products.id = ${newId}`)
    .catch((error) =>{
      console.log(error);
    });
  }

  function post ( name, category, price, inventory ){
    return db.one(`INSERT INTO products (name, category, price, inventory) VALUES ($1,$2,$3,$4) RETURNING *`, [name, category, price, inventory])
      .catch(error =>{
        console.log('Product not found:', error);
    });
  }

  function put( name, category, price, inventory, pId ){
    newId = pId.split('/').join('');
    return db.none(`UPDATE products SET (name, category, price, inventory) = ($1, $2, $3, $4) WHERE id = $5`, [name, category, price, inventory, newId])
      .catch(error =>{
        console.log('ERROR: ', error);
      });

   }
  function deleteProduct(id){
    newId = id.split('/').join('');
    return db.none(`DELETE FROM products WHERE id = $1`, [newId])
      .catch(error=>{
        console.log('ERROR: ', error);
      });
  }

  function sort(){
    return db.any('SELECT * FROM products ORDER BY price', [true])
      .catch((error) =>{
        console.log(error);
      });
  }

   function sortHigh(){
    return db.any('SELECT * FROM products ORDER BY price DESC', [true])
      .catch((error) =>{
        console.log(error);
      });
  }

  return{
    get,
    post,
    put,
    deleteProduct,
    getID,
    sort,
    sortHigh,
  };
};

let accessProducts = productDataBase();
module.exports = accessProducts;

