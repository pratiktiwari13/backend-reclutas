var express = require('express');
var router = express.Router();
var confirmEmail = require("../../middlewares/sign-up-middlewares/confirm-email");

// middleware that is specific to this router
router.get("/:token",require("../../middlewares/helper-middlewares/verify-with-token").confirmEmailTokenExtract,confirmEmail.confirm);

module.exports = router;