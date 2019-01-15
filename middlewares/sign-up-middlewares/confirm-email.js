var userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");

module.exports = {
    confirm:function(req,res,next){
            console.log("2");
            res.send("Redirect to phone number's page");
    }
};