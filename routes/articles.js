/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();
const articleDataBase = require('../db/articles');

module.exports = router;

router.route('/')
  .get(( req, res ) => {
    articleDataBase.get()
      .then((data) => {
        console.log(data);
        res.render('article_index', {
          articles: data
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
  })

  .put(( req, res ) => {
    res.send('PICK A THING TO PUT');
  })

  .delete(( req, res ) =>{
    res.send('CANNOT DELETE NOTHING DUMBASS');
  });

router.route('/new')
  .get((req,res) =>{
    res.render('article_new');
  });

router.route('/:id')
  .get(( req, res ) =>{
    console.log(req.path);
    articleDataBase.getID(req.path)
      .then(data => {
        console.log('GET DATA' + data);
        res.render('articles', {
          articles: data
        });
      });
  })

.post(( req, res) =>{
    res.send( 'CANNOT POST BY ID');
  })

.put(( req, res) =>{
  let article_title = req.body.title;
  let article_body = req.body.body;
  let article_author = req.body.author;
  let article_id = req.path;
  articleDataBase.put(article_title, article_body, article_author, article_id)
      .then(data => {
        console.log('PUT DATA: ' + data);
    });
     articleDataBase.getID(req.path)
      .then(data => {
        res.render('articles', {
        articles: data
      });
    });
})

.delete (( req, res ) =>{
    articleDataBase.deleteArticle(req.path)
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

  articleDataBase.getID(newId)
    .then(data =>{
      console.log(data);
       res.render('article_edit', {
         articles: data
       });
    });
});


