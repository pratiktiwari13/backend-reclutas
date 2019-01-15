const userRoleModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/user_role");
const router = require("express").Router();
const verifyWithToken = require("../../middlewares/helper-middlewares/verify-with-token").verifyUsers;

router.use(verifyWithToken);

router.get("/",async function(req,res,next){
    const roles = await userRoleModel.findAll({attributes:['user_role_id','role_name']});
    res.send(roles);
});

module.exports = router;