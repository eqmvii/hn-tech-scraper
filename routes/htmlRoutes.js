let path = require("path");
let express = require("express");

let router = express.Router();
let db = require("../models");

router.get("/test", function(req, res) {
  res.sendFile(path.join(__dirname, "/../web/welcome.html"));
});

module.exports = router;
