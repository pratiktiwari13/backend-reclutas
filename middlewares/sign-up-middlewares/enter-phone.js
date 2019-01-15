var mailerModule = require("../../helpers/mailer-module");

module.exports = {
    enterPhone:async function(req,res,next){
       // let number = req.body.number;
        console.log("hiiiiii");
        let email = req.body.email; //temporarily send the otp as a mail;
        let role = req.body.role;
        mailerModule.sendPassword(email,role);
        res.status(200);
        res.send({message:'Redirect to Login'});
    }
};