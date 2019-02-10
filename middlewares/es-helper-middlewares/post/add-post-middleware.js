const connObj = require("../../../helpers/connectes").getConnectionObject();

module.exports = function(req,res,next){
    connObj.import();
};