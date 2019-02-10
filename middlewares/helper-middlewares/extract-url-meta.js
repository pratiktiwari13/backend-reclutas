const urlMeta = require('url-metadata');

module.exports = {
    extract:async function (req,res,next) {
        if(isUrlValid(req.body.data.news_feed.news_feed_text)){
            try {
                let data = await urlMeta(req.body.data.news_feed.news_feed_text);
                req.body.data.news_feed.link_meta = JSON.stringify(data);
                //console.log(req.body.news_feed.link_meta);
                next();
            }
            catch(e){
                res.send("URL response error");
            }
        }
        else{
            req.body.data.news_feed.is_deleted = 0;
            next();
        }
    }
};

function isUrlValid(userInput) {
    let res = userInput.match("^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$");
    return res !== null;
}

//module.exports.extract({body:{news_feed:{news_feed_name:'https://www.startupbundle.com'}}},null,()=>{console.log("Next Called")});