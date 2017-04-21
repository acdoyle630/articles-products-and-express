/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const productDataBase = require('../db/products');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    res.send(productDataBase.get());
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
    res.send(productDataBase.get(req.path));
  })


  .post(( req, res) =>{
    res.send( 'hit id post');
  })

  .put(( req, res) =>{
    if(productDataBase.put(req) === true){
      res.json({success: true});
      //get product by id
     //res.redirect(`/products${req.body.path}`);

    } else{

      //productsNew ID
      res.json({success: false});
    }
  })

  .delete (( req, res ) =>{
    productDataBase.deleteProduct(req.path);
  });
