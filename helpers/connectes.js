const es = require("elasticsearch");
const esClient = new es.Client({
    host:'localhost:9200'
});

esClient.ping({requestTimeout:30000},(err)=>{
    if(err)throw err;
});


module.exports = {
    getConnectionObject:function(){
        return esClient;
    }
};