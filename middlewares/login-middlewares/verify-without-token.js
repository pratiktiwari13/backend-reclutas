const sequelize = require("../../helpers/connectdb").getConnectionObject();
const userModel = sequelize.import('../../models/users');
const userRoleModel = sequelize.import('../../models/user_role');
const jwt = require("jsonwebtoken");
const config = require("../../config");
const encrypt = require("../../helpers/encrypt");

module.exports = {
    login:async function(req,res,next) {
        let errmsg="";
        try {
            errmsg = "Username or password incorrect";
            let user = await userModel.find(
                {
                    attributes: ['user_id', 'user_role_id','is_fully_registered','is_first_login','user_email'],
                    where: {
                        user_email: req.body.user_email,
                        user_password: encrypt.encrypt(req.body.user_password)
                    }
                }
            );
            errmsg = "Oops! Something went wrong";
            let token = await jwt.sign({id: user.user_id, role: user.user_role_id, isFirstLogin: user.is_first_login,isFullyRegistered:user.is_fully_registered,user_email:user.user_email}, config.secret); //Don't keep the user signed-in in the case of first login if he quits the password change process
            let role = await userRoleModel.findById(user.user_role_id,{attributes:['role_name']});
            res.send({'token': token,'role':role.role_name,'isFirstLogin':user.is_first_login,'isFullyRegistered':user.is_fully_registered}); //if isFullyRegistered is not set, save the dump the redirect point and redirect the user to register the remaining details
        }
        catch(err){
            res.send("Wrong password");
        }
    }
};



