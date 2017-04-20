/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    res.send('hit get');
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