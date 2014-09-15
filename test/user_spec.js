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

        it("email is manjesh.2j@gmail.com");
        it("has an authentication token");
        it("has a pending status ");
        it("has a created date");
        it("has a SignInCount of 0");
        it("has a lastLogin");
        it("has a currentLogin");


    }) ;// describe("defaults",function(){
}); //describe("User",function(){
