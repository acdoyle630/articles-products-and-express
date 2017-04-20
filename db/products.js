/*jshint esversion: 6*/

const express = require('express');

const productDataBase = () =>{
  let products = [];
  let productNames = [];
  currentId = 1;

  function get (){
    console.log('got');
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
    checkForProductById(searchedId.join(), currentProduct);
    //console.log(productById);
   }

  function checkForProduct( name ){
    if(productNames.indexOf(name) < 0){
      return true;
    }
  }

  function checkForProductById(id, currentProduct){
    console.log('hit function');
    console.log(id);
    console.log(products[0].id);
    for(var i = 0; i < products.length; i++){
      if(id === products[i].id){
        console.log(products[i]);
      }
    }
  }

  return{
    get,
    post,
    put,
  };
};

let accessProducts = productDataBase();
module.exports = accessProducts;

