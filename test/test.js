const chai=require('chai');
const chaiHttp=require('chai-http');
chai.use(chaiHttp);
const expect=chai.expect;
const should=chai.should();
const logger=require('../Logger/logger');
const server=require('../app');

describe('register student',()=>{
 it('testing register',(done)=>{
  chai.request('http://localhost:5000')
  .get('/register')
  .end((err,res)=>{
   res.should.have.status(200);
   expect(err).to.be.null;
   logger.info('register page rendered');
   done();
  })
 })
})

