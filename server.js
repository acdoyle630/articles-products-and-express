/*jshint esversion: 6*/

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const articlesRoutes = require('./routes/articles');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/articles', articlesRoutes);


const server = app.listen(PORT, () =>{
  console.log(`server listening on ${PORT}`);
});
