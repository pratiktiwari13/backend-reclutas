const express = require("express");
const router = express.Router();
const verifyWithToken = require("../../middlewares/helper-middlewares/verify-with-token").verifyUsers;
const addPosts = require("../../middlewares/helper-middlewares/generic-create-update").create;
//const deletePosts = require("../../middlewares/news-feed-middlewares/delete").delete;
const convertImgData = require("../../middlewares/helper-middlewares/convert-image-data").convert;
const extractUrlMeta = require("../../middlewares/helper-middlewares/extract-url-meta").extract;

router.use(verifyWithToken);

router.post("/add-post",convertImgData,extractUrlMeta,addPosts,(req,res,next)=>res.send(200)); //remove the last middleware with elasticsearch middlewares


module.exports = router;