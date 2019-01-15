const userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");

module.exports = async function(req,res,next) {
    let user_id = req.body.id;
    await userModel.update({is_fully_registered:1},{where:{user_id:user_id}});
    res.send(200);
};