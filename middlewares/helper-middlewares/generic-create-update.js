const connObj = require("../../helpers/connectdb").getConnectionObject();

module.exports = {
    create:async function(req,res,next){
        let keyValues = {};
        keyValues["user_id"] = req.body.id;
        try {
            let arr = req.body.data;
            let tables = Object.keys(arr);
            for (let i = 0; i < tables.length; i++) {
                let tableModel = connObj.import("../../models/" + tables[i]);
                if(keyValues.length !== 0){
                    let columns = Object.keys(tableModel.attributes);
                    await Array.prototype.forEach.call(Object.keys(keyValues),function (previous_table_key) {
                        if(columns.indexOf(previous_table_key) !== -1){
                            (arr[tables[i]])[previous_table_key] = keyValues[previous_table_key];
                        }
                    });
                }
                let primaryKey = tableModel.primaryKeyAttributes;
                let dataEntered = await tableModel.create(arr[tables[i]]);
                keyValues[primaryKey[0]] = dataEntered[primaryKey[0]];
            }
            next();
        }
        catch(err){
            throw err;
        }
    },
    update:async function(req,res,next){
        try {
            let arr = req.body.data;
            let role = req.body.role;
            let id = req.body.id;
            let tables = Object.keys(arr);
            for (let i = 0; i < tables.length; i++) {
                let tableModel = connObj.import("./models/" + tables[i]);
                console.log(arr[tables[i]]);
                await tableModel.update(arr[tables[i]],{where:resolveWhereClause(role,id)});
            }
            res.send(200);
        }
        catch(err){
            throw err;
        }
    }
};

async function resolveWhereClause(role,id){
    switch(role){
        case 'STUDENT':
                let studentModel = connObj.import("../models/student");
                let id = await studentModel.find({attributes:['student_id'],where:{user_id:id}});
                return {student_id:id};
            break;
        default:
            return {user_id:id};
            break;
    }
}