/*jshint esversion: 6*/

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();



const server = app.listen(PORT, () =>{
  console.log(`server listening on ${PORT}`);
});
