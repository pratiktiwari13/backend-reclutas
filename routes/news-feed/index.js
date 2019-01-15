const router = require("express").Router();
const makePost = require("./make-post");

router.post("/add-post",makePost);

module.exports = router;