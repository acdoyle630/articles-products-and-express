/*jshint esversion: 6*/

const express = require('express');

const articleDataBase = () =>{
  let articles = [];
  let articleNames = [];
  currentId = 1;

  function get (){
    console.log('hit get');
  }
  return{
    get,
  };
};

let accessArticles = articleDataBase();
module.exports = accessArticles;