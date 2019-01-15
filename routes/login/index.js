const router = require("express").Router();
const verifyEmail = require("./verify-email");
const login = require('./verify-pass-and-singin');
const firstLoginPassChangeRoute = require("./change-default-pass");

router.use("/verify-email",verifyEmail);//generalized /login
router.use("/verify-password",login);
router.use("/password-reset",firstLoginPassChangeRoute);

module.exports = router;