/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const articleDataBase = require('../db/articles');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    let articleData = (articleDataBase.get());

  })


  .post(( req, res ) => {
    res.send('hit post');
  })


  .put(( req, res ) => {
    res.send('hit put');
  })


  .delete(( req, res ) =>{
    res.send('hit delete');
  });