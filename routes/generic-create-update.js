const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config");
const postDetails = require("../middlewares/helper-middlewares/generic-create-update");
const verifyWithToken = require("../middlewares/helper-middlewares/verify-with-token");
const convertBase64ToBlob = require("../middlewares/helper-middlewares/convert-image-data").convert;

router.post("/update",verifyWithToken.verifyUsers,convertBase64ToBlob,postDetails.update);

router.post("/",async function(req,res,next){
    try {
        let payload = req.header('x-access-token');
        if (!payload) {
            res.send("No token found redirect to login page");
        }
        else{
            let decoded = await jwt.verify(payload, config.secret);
            req.body.id = decoded.id;
            req.body.role = decoded.role;
            if(!decoded.isFullyRegistered) {
                next();
            }
            else
                res.send("Redirect to dashboard");
        }
    }
    catch(err){
        res.send("Auth Failure:- Forged Token");
    }
},convertBase64ToBlob,postDetails.create);

module.exports = router;