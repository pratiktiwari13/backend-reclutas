const connObj = require("../../../helpers/connectes").getConnectionObject();

module.exports = async function(req,res,next){
    try {
        let user = {};
        user.user_id = req.locals.es_data.user.user_id;
        user.user_name = req.locals.es_data.user.user_name;

        await connObj.index({
            index: "users",
            type: "users",
            payload: user
        });

        delete req.locals.es_data;
        res.send(200);
    }
    catch(err){
        throw err;
    }
};