/*jshint esversion: 6*/

const request = require('supertest');
const app = require('../server');

describe('products routes', ()=>{
  it('should have and index route',( done ) =>{
    request( app )
      .get('/products')
      .expect(200)
      .expect('Content-Length', '338')
      .end((err, res) =>{
        if(err){
          throw new Error(err);
        }
        console.log(err);
        done();
        });
    });
  it('should get product by id',(done)=>{
    request( app )
    .post()
    .get('/product/1')
    .expect(200, done);
  });
});
