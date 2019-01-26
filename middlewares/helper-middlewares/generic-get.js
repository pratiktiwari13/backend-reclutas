const connObj = require("../../helpers/connectdb").getConnectionObject();
module.exports  = async function(req,res,next){
    let current = req.body.query;
    let currentModel,primaryKey,where = {};
    let currentId = null;
    let result={};

    try {
        while(current!==undefined){
            let keys = Object.keys(current);
            if(keys[0] === 'columns'){
                let res = await currentModel.find({attributes:current["columns"],where});
                await Array.prototype.forEach.call(current["columns"],(item)=>{
                    result[item] = res[item];
                });
                if(keys[1] === undefined)
                    break;
                currentModel = connObj.import("../../models/"+keys[1]);
                primaryKey = currentModel.primaryKeyAttributes;
                currentId = await currentModel.find({attributes:primaryKey,where});
                where = {};
                where[primaryKey[0]] = currentId[primaryKey[0]];
                current = current[keys[1]];
            }
            else {
                if(!currentModel && !primaryKey && !currentId)
                {
                    currentModel = connObj.import("../../models/"+keys[0]);
                    primaryKey = currentModel.primaryKeyAttributes;
                    currentId = req.body.id;
                    where = {};
                    where[primaryKey[0]] = currentId;
                }
                else{
                    currentModel = connObj.import("../../models/"+keys[0]);
                    primaryKey = currentModel.primaryKeyAttributes;
                    currentId = await currentModel.find({attributes:primaryKey,where});
                    where = {};
                    where[primaryKey[0]] = currentId[primaryKey[0]];
                }
                current = current[keys[0]];
            }
        }
        res.send(result);
    }
    catch(err){
        res.send({err:"Invalid get request format"});
    }
};