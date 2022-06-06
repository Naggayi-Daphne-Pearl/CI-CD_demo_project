const dotenv = require("dotenv");
dotenv.config();

const chai=require('chai');
const chaiHttp=require('chai-http');
chai.use(chaiHttp);
const expect=chai.expect;
const should=chai.should();
const logger=require('../Logger/logger');
const server=require('../app');

describe('register student',()=>{
 it('Should run all api tasks ',(done)=>{
  chai.request('http://localhost:5000')
  .get('/register')
  .end((err,res)=>{
   // res.should.have.status(200);
   expect(res.status).to.be(200)
   expect(err).to.be.null;
   res.body.should.have.property('name'); 
   expect(attributes.name).to.eql('string');
   logger.info('register page rendered');
   done();
  })
 }); 

 it('Should not run any api tasks ',(done)=>{
    chai.request('http://localhost:5000')
    .get('/register')
    .end((err,res)=>{
   //   res.should.have.status(404);
      expect(res.status).to.be(404)
     expect(err).to.be.null;
     logger.error('test failed');
     done();
    })
   });

})

