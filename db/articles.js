/*jshint esversion: 6*/


// db.one('INSERT INTO products (title, body, author) VALUES ($1,$2,$3) RETURNING id', ['Test title', 'test body', 'test author'])
//   .then(data => {
//     console.log(data.id);
//   })
//   .catch(error =>{
//     console.log('ERROR:', error);
//   });







// const express = require('express');

// const articleDataBase = () =>{
//   let articles = [];
//   let articleNames = [];
//   currentId = 1;

//   function get ( id ){
//     if(id){
//     console.log(id);
//     searchId = id.split('');
//     searchId.shift();
//     return checkForArticleById(searchId.join());
//   } else{
//     return articles;
//   }
//   }
//   function post ( article ){
//     if(checkForarticle(article.title) === true){
//       article.id = currentId;
//       currentId ++;
//       articles.push(article);
//       articleNames.push(article.title);
//       return true;
//     }
//   }

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

//   return{
//     get,
//     post,
//     put,
//     deleteArticle,
//   };
// };

// let accessarticles = articleDataBase();
// module.exports = accessarticles;

