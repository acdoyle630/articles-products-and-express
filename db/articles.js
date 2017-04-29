/*jshint esversion: 6*/

/*jshint esversion: 6*/

const express = require('express');

const db = require('./connection');

const articleDataBase = () =>{

  function get(){
    return db.any('SELECT * FROM articles', [true])
      .catch((error) =>{
        console.log(error);
    });
  }

  function post ( title, body, author ){
    return db.one(`INSERT INTO articles (title, body, author) VALUES ($1,$2,$3) RETURNING *`, [title, body, author])
      .catch(error =>{
        console.log('Product not found:', error);
    });
  }

//   function put( article ){
//     let id = article.path;
//     let searchedId = (id.split(''));
//     searchedId.shift();
//     let currentarticle = article.body;
//     let articleById = checkForArticleById(searchedId.join(), currentarticle);
//     if(articleById === false){
//       return false;
//     } else {
//       articleById.title = article.body.title;
//       articleById.body = article.body.body;
//       articleById.author = article.body.author;
//       return true;
//     }
//    }
//   function deleteArticle(id){
//     temp = id.split('');
//     temp.shift();
//     articleId = temp.join();
//     let articleToDelete = checkForArticleById(articleId);
//     articles.splice(articles.indexOf(articleToDelete),1);
//     articleNames.splice(articleNames.indexOf(articleToDelete.name));
//   }

//   function checkForarticle( name ){
//     if(articleNames.indexOf(name) < 0){
//       return true;
//     }
//   }

//   function checkForArticleById(id, currentarticle){
//     if(articles.length === 0){
//       return false;
//     }
//     for(var i = 0; i < articles.length; i++){
//       if(articles[i].id == id){
//         return articles[i];
//       }
//     } return false;
//   }

  return{
       get,
       post,
//     put,
//     deleteArticle,
   };
 };

let accessarticles = articleDataBase();
module.exports = accessarticles;

