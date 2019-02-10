const router = require("express").Router();
const verifyUsers = require("../../middlewares/helper-middlewares/verify-with-token").verifyUsers;
const genericGet = require("../../middlewares/helper-middlewares/generic-get");

router.use(verifyUsers);

router.use("/user-media",(req,res,next)=>{req["locals"] = {
  media:true
};next()},genericGet);

router.use("/user-data",(req,res,next)=>{req["locals"] = {
    data:true
};next()},genericGet);


module.exports = router;