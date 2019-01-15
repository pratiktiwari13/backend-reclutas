const userModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/users");
const userRoleModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/user_role");
const mailerModule = require("../../helpers/mailer-module");

module.exports = {
  add:async function(req,res,next){
      try {
          let email = req.body.user_email;
          let role_id = req.body.user_role_id;

          let roleName = await userRoleModel.find({attributes: ['role_name'], where: {user_role_id: role_id}});

          mailerModule.sendConfirmationLink(email,roleName);
          console.log("Sent");
          res.send({user_email:email,user_role_id:roleName});
          await removeRedundancies(email);
      }
      catch(err){
          throw err;
          //res.send(err);
      }
  }

};

async function removeRedundancies(email){
    try {
       await userModel.destroy({where: {user_email: email}});
    }
    catch(err){
        throw err;
    }
}