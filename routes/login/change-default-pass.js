var express = require("express");
var router = express.Router();
var userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");
var encrypt = require("../../helpers/encrypt");
var jwt = require("jsonwebtoken");
var config = require("../../config");

router.use(async function(req,res,next){
    try {
        let payload = req.header('x-access-token');
        if (!payload) {
            res.send("No token found redirect to login page");
        }
        else{
            let decoded = await jwt.verify(payload, config.secret);
            req.body.user_email = decoded.user_email;
            next();
        }
    }
    catch(err){
        res.send("Auth Failure:- Forged Token");
    }
});

router.post("/",async function(req,res,next){
    try {
        await userModel.update({user_password: encrypt.encrypt(req.body.password),is_first_login:false,user_token:' '}, {
            where: {user_email: req.body.user_email}
        });
        res.send({message:"password successfully changed invalidate token and re-login"});
    }
    catch(err){
        res.send(err);
        //res.send("Email wrong");
    }
});

module.exports = router;
