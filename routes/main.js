var router = require("express").Router();

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/jwtest1", function (req, res) {
  res.render("jwtest1");
});

router.get("/jwtest2", function (req, res) {
  res.render("jwtest2");
});

module.exports = router;
