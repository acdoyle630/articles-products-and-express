/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const productDataBase = require('../db/products');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    productDataBase.get()
      .then((data) => {
        console.log('data: ' + data);
        res.render('index', {
          products: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  })

  .post(( req, res ) => {
    let product_name = req.body.name;
    let product_price = req.body.price;
    let product_inventory = req.body.inventory;
    productDataBase.post(product_name, product_price, product_inventory)
      .then(data => {
        console.log(data);
        res.render('product', {
          products: data
        });
      });
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
    console.log(req.path);
    productDataBase.getID(req.path)
      .then(data => {
        console.log(data);
        res.render('product', {
          products: data
        });
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

let productData = productDataBase.get(idpath.join('/'));
     res.render('product_edit', {
       products: productData
     });
});