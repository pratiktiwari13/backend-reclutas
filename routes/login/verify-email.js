var express = require("express");
var router = express.Router();
var userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");

router.post("/",async function(req,res,next){
    try {
        let user = await userModel.find({
            attributes:['is_fully_registered'],
            where: {user_email: req.body.user_email,is_deleted:0}
        });
        res.send({isFullyRegistered:user.is_fully_registered});
    }
    catch(err){
        //throw err;
        res.send("Email wrong or user does'nt exist");
    }
});

module.exports = router;
