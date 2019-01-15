var express  = require("express");
var router = express.Router();
var userModel = require("../helpers/connectdb").getConnectionObject().import("../models/users");
var config = require("../config");
var jwt = require("jsonwebtoken");
var mailer  = require("../helpers/mailer-module");
var token_checker = require("../middlewares/helper-middlewares/verify-with-token").checkPasswordChangeToken;

router.post("/",async function (req,res,next) {
    if(!req.body.password && req.body.email) {
        let errmsg = "";
        try {
            errmsg = "Email invalid";
            let user = await userModel.find({attributes: ['user_email'], where: {'user_email': req.body.email}});
            errmsg = "Oops! Something went wrong";
            let token = await jwt.sign({email:req.body.email}, config.secret, {expiresIn:'3h'});
            console.log("token made :- "+token);
            mailer.sendForgotPasswordMail(req.body.email, token);
            res.send("Email Sent");
        }
        catch (err) {
            res.send(errmsg);
            throw err;
        }
    }
    else if(req.body.password && req.body.email){
        try {
            let result = await userModel.update({user_password: req.body.password}, {
                where: {user_email: req.body.email}
            });
            res.send("password successfully changed invalidate token and re-login");
        }
        catch(err){
            //res.send(err);
            res.send("Email wrong");
        }
    }
});

router.get("/:token",token_checker,async function(req,res,next){
    res.send("Render Password Change");
});

module.exports = router;