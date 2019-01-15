var jwt  = require("jsonwebtoken");
var config = require("../../config");
//var userRoleModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/user_role");

module.exports = {
    verifyUsers:async function(req,res,next){
        try {
            let payload = req.header('x-access-token');
            if (!payload) {
                res.send("No token found redirect to login page");
            }
            else{
                let decoded = await jwt.verify(payload, config.secret);
                req.body.id = decoded.id;
                req.body.role = decoded.role;
                req.body.email = decoded.email;
                if(!decoded.isFullyRegistered)
                    res.send("Not Fully Registered, redirect to remaining details page");
                else if(decoded.isFirstLogin)
                    res.send("Redirect to password change page");
                else
                    next();
            }
        }
        catch(err){
            res.send("Auth Failure:- Forged Token");
        }
    },
    checkPasswordChangeToken:async function(req,res,next){
        try{
            console.log(req.params.token);
            let data = await jwt.verify(req.params.token,config.secret);
            next();
        }
        catch(err){
            res.send("Link Expired");
        }
    },
    confirmEmailTokenExtract:function(req,res,next){
            let data = jwt.verify(req.params.token,config.secret);
            req.body.email = data.email;
            console.log("1");
            next();
    },
    checkIfAdmin:async function(req,res,next){
        try{
            let data = await jwt.verify(req.header('x-access-token'),config.secret);
            if(data.role === 1){
                next();
            }
            else{
                res.send("Unauthorized access");
            }
        }
        catch(err){
            res.send(err);
        }
    }
};