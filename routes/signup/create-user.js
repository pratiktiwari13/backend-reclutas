var express = require('express');
var router = express.Router();
var initUser = require("../../middlewares/sign-up-middlewares/init-user");
var checkIfAdmin = require("../../middlewares/helper-middlewares/verify-with-token").checkIfAdmin;
var checkIfUserExists = require("../../middlewares/sign-up-middlewares/check-if-user-exists").checkIfUserExists;

// middleware that is specific to this router
router.use(checkIfAdmin,checkIfUserExists);

router.post("/",initUser.add);

module.exports = router;