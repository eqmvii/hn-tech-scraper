let path = require("path");
let express = require("express");

let router = express.Router();
let db = require("../models");

// console.log(db);
console.log(db.article);

router.get("/test", function(req, res) {
  res.sendFile(path.join(__dirname, "/../web/welcome.html"));
});

router.get('/testcreate', function(req, res) {
  let fakeArticle = {
    headline: 'This is the fake test article!',
    url: 'https://www.google.come'
  };

  db.article.create(fakeArticle)
    .then(function(newArticle) {
      res.json(newArticle);
    });
});

router.get('/articles/all', function(req, res) {
  db.article.find({})
    .then(function(articles) {
      res.json(articles);
    });
});

module.exports = router;
