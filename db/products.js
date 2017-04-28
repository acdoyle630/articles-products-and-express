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
        console.log('ERROR:', error);
    });
  }

  function put( product ){
    let id = product.path;
    let searchedId = (id.split(''));
    searchedId.shift();
    let currentProduct = product.body;
    let productById = checkForProductById(searchedId.join(), currentProduct);
    if(productById === false){
      return false;
    } else {
      productById.name = product.body.name;
      productById.inventory = product.body.inventory;
      productById.price = product.body.price;
      return true;
    }
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

  function checkForProductById(id, currentProduct){
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

