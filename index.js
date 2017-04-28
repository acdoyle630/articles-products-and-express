/*jshint esversion: 6*/

const PORT = 3000;
const app = require('./server');
const server = app.listen(PORT, () =>{
  console.log(`server listening on ${PORT}`);
});
