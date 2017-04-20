/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    res.send('hit');
  });