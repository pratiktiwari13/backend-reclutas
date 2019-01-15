const express = require('express');
const router = express.Router();
const enterPhone = require('../../middlewares/sign-up-middlewares/enter-phone').enterPhone;
const jwt = require("jsonwebtoken");
const config = require("../../config");

router.use(async function(req,res,next){
    try {
        console.log("hi");
        let data = await jwt.verify(req.body.token, config.secret);
        req.body.email = data.email;
        console.log(req.body.email);
        req.body.role = data.role.role_name;
        next();
    }
    catch(err){
        console.log("err");
        throw  err;
    }
});

router.post("/",enterPhone);

module.exports = router;