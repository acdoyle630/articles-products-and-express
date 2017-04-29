/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const articleDataBase = require('../db/articles');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    articleDataBase.get()
      .then((data) => {
        res.render('article_index', {
          article: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  })

  .post(( req, res ) => {
    let article_title = req.body.title;
    let article_body = req.body.body;
    console.log(req.body.body);
    let article_author = req.body.author;
    articleDataBase.post(article_title, article_body, article_author)
      .then(data => {
        console.log(data);
        res.render('articles', {
          articles: data
        });
      });
  });

