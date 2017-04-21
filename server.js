/*jshint esversion: 6*/

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = 3000;
const articlesRoutes = require('./routes/articles');
const productRoutes = require('./routes/products');
const app = express();
const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'main'
});
app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/articles', articlesRoutes);

app.use('/products', productRoutes);

let homeData = {
  title: 'The House BoardShop',
};

app.get('/', (req,res)=>{
  res.render('home', homeData);
});


const server = app.listen(PORT, () =>{
  console.log(`server listening on ${PORT}`);
});
