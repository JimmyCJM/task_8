"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var postNet = require("../lib/main.js");


describe("Postal Numeric Encoding Technique", function(){
    sinon.spy(console, 'log');

    it("err input", function(){
        let input = 9571320465564645634;
        var result = postNet(input);
        var expect_string = `err input!please check your input`;

        expect(result).to.equal(expect_string);
    });

    it("err input", function(){
        let input = `| ::||: :|::| |::|: |:|:: :||::`;
        var result = postNet(input);
        var expect_string = `err input!please check your input`;

        expect(result).to.equal(expect_string);
    });

    it("input number with 9 digits", function(){
        let input = 957132046;
        var result = postNet(input);
        var expect_string = `| |:|:: :|:|: |:::| :::|| ::||: ::|:| ||::: :|::| :||:: ::||: |`;
        
        expect(result).to.equal(expect_string);
    });

    it("input number with 10 digits", function(){
        let input = '19237-2810';
        var result = postNet(input);
        var expect_string = `| :::|| |:|:: ::|:| ::||: |:::| ::|:| |::|: :::|| ||::: |:::| |`;

        expect(result).to.equal(expect_string);
    });

    it("input string with 5 digits", function(){
        let input = `| ::||: :|::| :::|| ::|:| |:|:: :::|| |`;
        var result = postNet(input);
        var expect_string = '34129';

        expect(result).to.equal(expect_string);
    });

    it("input string with 9 digits", function(){
        let input = `| ::||: :|::| |::|: |:|:: :||:: :::|| :::|| :|:|: |:|:: :|::| |`;
        var result = postNet(input);
        var expect_string = '34896-1159';

        expect(result).to.equal(expect_string);
    });

});




