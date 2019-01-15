const newsfeedModel = require("../../helpers/connectdb").getConnectionObject().import("../../models/news_feed");

module.exports = {add:async function(req,res,next){
    let feedTitle = req.body.feed_title;
    let buf;

    if(req.body.isImage && req.body.isLink){
        res.send("Invalid Request");
    }

    if(req.body.isImage){
        buf = Buffer.from(req.body.img, 'base64');
    }

    if(req.body.isLink){
        //call the link meta api
    }



}};