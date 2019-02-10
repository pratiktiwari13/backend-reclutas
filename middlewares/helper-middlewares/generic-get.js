const connObj = require("../../helpers/connectdb").getConnectionObject();
let findParams = {};
module.exports  = async function(req,res,next) {
    resolveFindParams(req.body.query,{});
    let workingModel = connObj.import("../../models"+req.body.query[0]);
    let data = await workingModel.findAll(findParams);
    data = refineData(data);
    res.send(data);
};

function resolveFindParams(root,currentScope){
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
            currentScope["include"][count] = {model: keys[i]};
            count++;
            resolveFindParams(root[keys[i]],currentScope["include"][count - 1]);
        }
    }
}

function refineData(data){

}

resolveFindParams({
    attributes:['user_email'],
    where:{user_id:26}}
,{});
/*resolveFindParams({
        attributes:['user_id'],
        student:{
            attributes:['student_id'],
            student_abc:{
                attributes:['studentabc_id'],
                student_pqr:{
                    attributes:['studentpqr_id']
                }
            }
        },
        abc:{
            attributes:['some_column']
        }
},{});*/

const util = require("util");
console.log(util.inspect(findParams,false,null,true));

/*d
  1. the root could have a where attribute
  2. with either of the two options :- all,[]
  3. It'll be okay if you don't specify "where" if you want data related to that specific user as where is assumed to be user_id = token.user_id
  4. if you have ids of specific models then make that model as the root
  5. If the model is not users and you don't specify where in the root attribute then it'll return everything by default
*/