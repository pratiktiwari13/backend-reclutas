var crypto = require("crypto");
var config = require("../config");

module.exports = {
    encrypt:function(text){
        var mykey = crypto.createCipher('aes-128-cbc', config.secret);
        var encryptedToken = mykey.update(text, 'utf8', 'hex');
        encryptedToken += mykey.final('hex');
        return encryptedToken;
    }};

//console.log(module.exports.encrypt("Dhananjay@10"));
