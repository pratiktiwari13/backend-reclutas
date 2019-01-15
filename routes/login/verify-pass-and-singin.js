var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.post("/",require("../../middlewares/login-middlewares/verify-without-token").login);

module.exports = router;