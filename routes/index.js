var router = require("express").Router();

var product = require("./product");

router.use("/product", product);

module.exports = router;
