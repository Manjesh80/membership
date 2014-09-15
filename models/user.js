/**
 * Created by Anu on 9/15/2014.
 */


var assert = require("assert");

var User = function(args){
    assert.ok(args.email, "Email is required");
    var user = { };
    user.email = args.email;
};

module.exports = User;