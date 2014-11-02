var expect = require('chai').expect;
var should = require('chai').should;
var server = require('../server.js');
var Browser = require('zombie');

describe("homepage", function(){
    before (function(done){
        this.browser = new Browser();
        this.browser
            .visit("http://localhost:3000/")
            .then(done, done);
    });

    it("should load the homepage", function(){
      expect(this.browser.text('H1')).to.equal('Welcome to Chitter');  
    });


});
