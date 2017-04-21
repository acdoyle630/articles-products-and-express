/*jshint esversion: 6*/

const express = require('express');

const productDataBase = () =>{
  let products = [];
  let productNames = [];
  currentId = 1;

  function get ( id ){
    if(id){
    console.log(id);
    serachId = id.split('');
    serachId.shift();
    return checkForProductById(serachId.join());
  } else{
    return products;
  }
  }
  function post ( product ){
    if(checkForProduct(product.name) === true){
      product.id = currentId;
      currentId ++;
      products.push(product);
      productNames.push(product.name);
      return true;
    }
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
  };
};

let accessProducts = productDataBase();
module.exports = accessProducts;

