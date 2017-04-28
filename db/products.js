/*jshint esversion: 6*/

const express = require('express');

const pgp = require('pg-promise')();

const db = pgp('postgres://house_user:house@localhost:5432/the_house');

module.exports = db;

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

  function post ( name, price, inventory ){
    return db.one(`INSERT INTO products (name, price, inventory) VALUES ($1,$2,$3) RETURNING *`, [name, price, inventory])
      .catch(error =>{
        console.log('Product not found:', error);
    });
  }

  function put( name, price, inventory, pId ){
    newId = pId.split('/').join('');
    console.log(`NAME: ${name}, PRICE: ${price}, INVENTORY ${inventory}, ID: ${pId}`);
    console.log(newId);


    return db.none(`UPDATE products SET (name, price, inventory) = ($1, $2, $3) WHERE id = $4`, [name, price, inventory, newId])
      .catch(error =>{
        console.log('ERROR: ', error);
      });

   }
  function deleteProduct(id){
    temp = id.split('');
    temp.shift();
    productId = temp.join();
    let productToDelete = checkForProductById(productId);
    products.splice(products.indexOf(productToDelete),1);
    productNames.splice(productNames.indexOf(productToDelete.name));
  }

  function checkForProduct( name ){
    if(productNames.indexOf(name) < 0){
      return true;
    }
  }

  function checkForProductById(id){
    if(products.length === 0){
      return false;
    }
    for(var i = 0; i < products.length; i++){
      if(products[i].id == id){
        return products[i];
      }
    } return false;
  }

  return{
    get,
    post,
    put,
    deleteProduct,
    getID,
  };
};

let accessProducts = productDataBase();
module.exports = accessProducts;

