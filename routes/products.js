/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const productDataBase = require('../db/products');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    productDataBase.get()
      .then((data) => {
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
    let product_category = req.body.category;
    console.log(product_category);
    productDataBase.post(product_name, product_category, product_price, product_inventory)
      .then(data => {
        console.log(data);
        res.render('product', {
          products: data
        });
      });
  })

  .put(( req, res ) => {
    res.send('PICK A THING TO PUT');
  })

  .delete(( req, res ) =>{
    res.send('CANNOT DELETE NOTHING DUMBASS');
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
        console.log('GET DATA' + data);
        res.render('product', {
          products: data
        });
      });
  })

  .post(( req, res) =>{
    res.send( 'CANNOT POST BY ID');
  })

  .put(( req, res) =>{
    let product_name = req.body.name;
    let product_category = req.body.category;
    let product_price = req.body.price;
    let product_inventory = req.body.
    inventory;
    let product_id = req.path;
    productDataBase.put(product_name, product_category, product_price, product_inventory, product_id)
        .then(data => {
          console.log('PUT DATA: ' + data);
      });
       productDataBase.getID(req.path)
        .then(data => {
          res.render('product', {
          products: data
        });
      });
  })

  .delete (( req, res ) =>{
    productDataBase.deleteProduct(req.path)
      .then(data => {
        console.log('DELETED?');
        res.render('home');
      });

  });

router.route('/:id/edit')
  .get((req,res) =>{

   let idpath = (req.path.split('/'));
   idpath.pop();
   newId = idpath.join('');

  productDataBase.getID(newId)
    .then(data =>{
      console.log(data);
       res.render('product_edit', {
         products: data
       });
    });
});