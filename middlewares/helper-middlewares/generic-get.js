const connObj = require("../../helpers/connectdb").getConnectionObject();
require("../../helpers/create-associations");
let findParams = {};
module.exports  = async function(req,res,next) {
    let rootModel = (Object.keys(req.body.query))[0];
    let workingModel = connObj.import("../../models/"+rootModel);
    resolveFindParams(req.body.query[rootModel],{},rootModel);
    let data = await workingModel.findAll(findParams);
    data = refineData(data);
    res.send(data);
};

function resolveFindParams(root,currentScope,previousModel){
    let keys = Object.keys(root);
    let count = 0;
    for(let i=0;i<keys.length;i++){
        if(keys[i] === "attributes")
            if(!findParams.hasOwnProperty("attributes"))
                findParams["attributes"] = root["attributes"];
            else
                currentScope["attributes"] = root["attributes"];
        else if(keys[i] === "where")
            if(!findParams.hasOwnProperty("where"))
                findParams["where"] = root["where"];
            else
                currentScope["where"] = root["where"];
        else{
            if(!findParams.hasOwnProperty("include"))
                currentScope = findParams;
            if (!currentScope.hasOwnProperty("include"))
                currentScope["include"] = [];
            currentScope["include"][count] = getIncludeParams(keys[i],previousModel);
            count++;
            resolveFindParams(root[keys[i]],currentScope["include"][count - 1],keys[i]);
        }
    }
}

function refineData(data){
    data = data.map(data=>data.toJSON());
    console.log(data[0]);
}

function getIncludeParams(current,previous){
    let currentModel = connObj.import("../../models/"+current);
    let previousModel = connObj.import("../../models/"+previous);
    let key = (new previousModel())._modelOptions.name.plural;
    if(currentModel.associations[key])
        return {model:currentModel,through:{attributes:[]}};
    return {model:currentModel};
}

module.exports({body:{
    query:{
        student:{
            attributes:['student_first_name'],
            parents:{
                attributes:['parent_name']
            },
            student_documents:{
                attributes:['aadhar_number']
            },
            skill:{
                attributes:['skill_name']
            },
            where:{student_id:55}
        }
    }
}},null,null);

/*d
  1. the root could have a where attribute
  2. with either of the two options :- all,[]
  3. It'll be okay if you don't specify "where" if you want data related to that specific user as where is assumed to be user_id = token.user_id
  4. if you have ids of specific models then make that model as the root
  5. If the model is not users and you don't specify where in the root attribute then it'll return everything by default
*/