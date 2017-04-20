/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const productDataBase = require('../db/products');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    res.send('hit get');
  })


  .post(( req, res ) => {
    if(productDataBase.post(req.body) === true){
    res.json({success: true});
    } else {
      //Send to product/new
      res.json({success: false});
    }
  })


  .put(( req, res ) => {
    res.send('hit put');
  })


  .delete(( req, res ) =>{
    res.send('hit delete');
  });

router.route('/:id')
  .get(( req, res ) =>{
    res.send('hit id get');
  })


  .post(( req, res) =>{
    res.send( 'hit id post');
  })

  .put(( req, res) =>{
    if(productDataBase.put(req) === true){
    res.json({success: true});
    } else{
      res.json({success: false});
    }
  })

  .delete (( req, res ) =>{
    res.send( 'hit id delete');
  });
