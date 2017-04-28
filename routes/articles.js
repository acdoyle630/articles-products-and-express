/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const articleDataBase = require('../db/articles');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    let articleData = (articleDataBase.get());
    res.render('artindex', {
      articles: articleData
    });
  })

  .post(( req, res ) => {
    if(articleDataBase.post(req.body) === true){
    let articleData = (articleDataBase.get());
    res.render('artindex', {
      articles: articleData
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
    res.render('article_new');
  });

router.route('/:id')
  .get(( req, res ) =>{
    let articleData = articleDataBase.get(req.path);
     res.render('article', {
       articles: articleData
     });
  })

  .post(( req, res) =>{
    res.send( 'hit id post');
  })

  .put(( req, res) =>{
    if(articleDataBase.put(req) === true){
      let articleData = articleDataBase.get();
      res.render('artindex', {
      articles: articleData
    });

    } else{
      res.json({success: false});
    }
  })

  .delete (( req, res ) =>{
    articleDataBase.deleteArticle(req.path);
    let articleData = articleDataBase.get();
      res.render('artindex', {
      articles: articleData
    });
  });

router.route('/:id/edit')
  .get((req,res) =>{

   let idpath = (req.path.split('/'));
   idpath.pop();

let articleData = articleDataBase.get(idpath.join('/'));
     res.render('article_edit', {
       articles: articleData
     });
});