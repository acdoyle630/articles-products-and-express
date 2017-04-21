/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const productDataBase = require('../db/products');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    let productData = (productDataBase.get());
    console.log(productData);
    res.render('index', {
      products: productData
    });
  })

  .post(( req, res ) => {
    if(productDataBase.post(req.body) === true){
    let productData = (productDataBase.get());
    console.log(productData);
    res.render('index', {
      products: productData
    });
    } else {
      res.json({success: false});
    }
  })

  .put(( req, res ) => {
    res.send('hit put');
  })

  .delete(( req, res ) =>{
    res.send('hit delete');
  });

router.route('/new')
  .get((req,res) =>{
    res.render('product_new');
  });

router.route('/:id')
  .get(( req, res ) =>{
    let productData = productDataBase.get(req.path);
    console.log(productData);
     res.render('product', {
       products: productData
     });
  })

  .post(( req, res) =>{
    res.send( 'hit id post');
  })

  .put(( req, res) =>{
    if(productDataBase.put(req) === true){
      let productData = productDataBase.get();
      res.render('index', {
      products: productData
    });

    } else{
      res.json({success: false});
    }
  })

  .delete (( req, res ) =>{
    productDataBase.deleteProduct(req.path);
    let productData = productDataBase.get();
      res.render('index', {
      products: productData
    });
  });

router.route('/:id/edit')
  .get((req,res) =>{

   let idpath = (req.path.split('/'));
   idpath.pop();
   console.log(idpath.join('/'));

let productData = productDataBase.get(idpath.join('/'));
   console.log(productData);
     res.render('product_edit', {
       products: productData
     });
});