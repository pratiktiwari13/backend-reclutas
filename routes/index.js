const router = require("express").Router();
const passwordResetRoute = require("./password-reset");
const updateDetailsRoute = require("./generic-create-update");
const newsFeed = require("./news-feed");
const signup = require("./signup");
const login = require("./login");
const get = require("./get");

router.use("/password-reset",passwordResetRoute);
router.use("/update-details",updateDetailsRoute);
router.use("/login/",login);
router.use("/sign-up/",signup);
router.use("/news-feed/",newsFeed);
router.use("/get",get);

module.exports = router;