const router = require("express").Router();
const verifyWithToken = require("../../middlewares/helper-middlewares/verify-with-token").verifyUsers;
const branch = require("../../helpers/connectdb").getConnectionObject().import("../../models/branch");
const caste_category = require("../../helpers/connectdb").getConnectionObject().import("../../models/caste_category");
const education_type = require("../../helpers/connectdb").getConnectionObject().import("../../models/education_type");
const regional_language = require("../../helpers/connectdb").getConnectionObject().import("../../models/regional_language");
const skill = require("../../helpers/connectdb").getConnectionObject().import("../../models/skill");
const state = require("../../helpers/connectdb").getConnectionObject().import("../../models/state");

router.use(verifyWithToken);

router.get("/",async function(req,res,next){
    const data =await get();
    res.send(data);
});

async function get() {
    let data = {};
    data.branch = await branch.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    data.caste_category = await caste_category.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    data.education_type = await education_type.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    data.regional_language = await regional_language.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    data.skill = await skill.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    data.state = await state.findAll({attributes:{
        exclude:['createdAt','updatedAt']
    }});
    return data;
}

module.exports = router;