/**
 * Created by Manjesh Gowda on 9/15/2014.
 */
var should = require("should");
var User = require("../models/user");

describe("User",function(){
    describe("defaults",function(){

        var user={};

        before(function(){
            user = new User({
                email : "manjesh.2j@gmail.com"
            });
        }); // before(function(){

        it("email is manjesh.2j@gmail.com", function(){
            user.email.should.equal("manjesh.2j@gmail.com");
        });
        it("has an authentication token",function(){
            //user.authenticationToken.should.be.defined;
        });
        it("has a pending status ", function(){
            user.status.should.equal("pending");
        });
        it("has a created date", function(){
            //user.createdAt.should.be.defined;
        });
        it("has a SignInCount of 0", function(){
            user.signInCount.should.equal(0);
        });
        it("has a lastLogin", function(){
            //user.lastLoginAt.should.be.defined;
        });
        it("has a currentLogin", function(){
            //user.currentLoginAt.should.be.defined;
        });


    }) ;// describe("defaults",function(){
}); //describe("User",function(){
