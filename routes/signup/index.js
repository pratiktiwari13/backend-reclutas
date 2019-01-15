const router = require("express").Router();
const confirmEmailRoute = require("./confirm-email");
const enterPhoneRoute = require("./enter-phone");
const createUser = require("./create-user");
const getUserRoles = require("./get-user-roles");
const buildForm = require("./build-form");
const fullyRegister = require("../../middlewares/sign-up-middlewares/fully-register");
const remainingDetailsRoute = require("../../routes/generic-create-update");

router.use("/create-user",createUser); //make a generalized /sign-up and add these to its sub routes
router.use("/get-user-roles",getUserRoles);
router.use("/confirm-email",confirmEmailRoute);
router.use("/enter-phone",enterPhoneRoute);
router.use("/submit-remaining",remainingDetailsRoute,fullyRegister);
router.use("/submit-remaining/build-form",buildForm);

module.exports = router;
