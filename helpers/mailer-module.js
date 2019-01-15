nodemailer = require("nodemailer");
var userModel = require("../helpers/connectdb").getConnectionObject().import("../models/users");
var jwt = require("jsonwebtoken");
let encrypt = require("./encrypt");
var generatePassword = require("generate-password");
var userRoleModel = require("./connectdb").getConnectionObject().import("../models/user_role");
var config = require("../config");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'reclutas.in@gmail.com',
        pass: 'vpyyfjnmgtsfiqlx'
    }
});

function getMailOptions(to,subject,body) {
    return {
        from: 'reclutas.in@gmail.com',
        to: to,
        subject:subject,
        html: body
    };
}

module.exports = {
    sendForgotPasswordMail:async function(to,token) {
        let subject = 'Team Reclutas | Password Reset Link';
        let body = '<p>Click <a href="http://192.168.43.152:3000/api/password-reset/' + token + '">here</a> to reset your password</p>';
        transporter.sendMail(getMailOptions(to,subject,body));
    },
    sendConfirmationLink:async function(email,role){
            let subject = 'Team Reclutas | Is it Really You?!';
            let token  = jwt.sign({'email':email,'role':role},config.secret,{expiresIn:'30m'});
            let body = '<p>Click <a href="http://192.168.43.99:4200/stage2/' + token + '">here</a> to Confirm its you</p>';
            try {
                await transporter.sendMail(getMailOptions(email, subject, body));
                //await userModel.create({user_email:email});
            }
            catch (err){
                return err;
            }
        },
    sendPassword:async function(to,role) {

        try {
            const token = generatePassword.generate({
                length: 10,
                numbers: true
            });
            let body = "<p>Your One Time Pass is "+token+"</p>";
            let role_id = await  userRoleModel.find({attributes:['user_role_id'],where:{'role_name':role}});
            let encryptedToken = await encrypt.encrypt(token);
            await userModel.create({user_password: encryptedToken,is_first_login:true,user_token:token,user_email:to,is_email_verified:true,user_role_id:role_id.user_role_id,is_fully_registered:false,is_deleted:false});
            await transporter.sendMail(getMailOptions(to, "Team Reclutas|One Time Password",body));
        }
        catch(err){
            throw err;
        }
        }
    };