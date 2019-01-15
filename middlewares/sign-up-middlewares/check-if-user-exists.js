const userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");

module.exports = {
    checkIfUserExists:async function(req,res,next){
        let user = await userModel.find(
            {attributes:['user_id','is_deleted'],
                where:
                {
                    user_email:req.body.email,
                    is_deleted:0
                }
            });
        if(user)
            res.send("User already exists");
        else
            next();
    }
};