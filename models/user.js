/**
 * Created by Anu on 9/15/2014.
 */


var assert = require("assert");
var utility = require("../lib/utility");

var User = function(args){

    var user = { };

    user.email = args.email;
    user.id = args.id;
    user.name = args.name;
    user.displayName = args.displayName;

    user.authenticationToken = args.authenticationToken || utility.authenticationToken;

    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLoginAt || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.currentSessionToken = args.currentSessionToken || null;
    user.reminderSentAt = args.reminderSentAt || null;
    user.reminderToken = args.reminderToken || null;



    return user;
};

module.exports = User;