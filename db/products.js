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
      console.log(products);
      return true;
    }
  }

  function put( product ){
    let id = product.path;
    console.log("ID: " +id);
    let searchedId = (id.split(''));
    console.log('SEARCHED ID ARR : ' + searchedId);
    searchedId.shift();
    console.log("SEARCHED ID : "+searchedId);
    let currentProduct = product.body;
    let productById = checkForProductById(searchedId.join(), currentProduct);
    if(productById === false){
      return false;
    } else {
      console.log(productById);
      productById.name = product.body.name;
      productById.inventory = product.body.inventory;
      productById.price = product.body.price;
      console.log(productById);
      console.log(products);
      return true;
    }
   }
  function deleteProduct(id){
    temp = id.split('');
    temp.shift();
    productId = temp.join();
    let productToDelete = checkForProductById(productId);
    console.log(productToDelete);
    products.splice(products.indexOf(productToDelete),1);
    console.log(products);
  }

  function checkForProduct( name ){
    if(productNames.indexOf(name) < 0){
      return true;
    }
  }

  function checkForProductById(id, currentProduct){
    console.log('hit function');
    console.log(typeof id);
    console.log(id);
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

