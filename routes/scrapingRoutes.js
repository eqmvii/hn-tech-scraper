let path = require("path");
let express = require("express");

let router = express.Router();
let db = require("../models");

var cheerio = require("cheerio");
var axios = require("axios");

router.get("/cheeriotest/reddit", function(req, res) {
  axios.get("https://old.reddit.com/r/webdev").then(function(axiosResponse) {
    var $ = cheerio.load(axiosResponse.data);
    titleArray = [];

    $('a.title').each(function(i, element) {
      let title = $(element).text();
      console.log(title);
      titleArray.push(title);
    });

    res.json(titleArray);
  });
});

router.get("/cheeriotest/hn", function(req, res) {
  axios.get("https://news.ycombinator.com/news").then(function(axiosResponse) {

    var $ = cheerio.load(axiosResponse.data);

    titleArray = [];

    $('a.storylink').each(function(i, element) {
      let title = $(element).text();
      console.log(title);
      titleArray.push(title);
    });

    res.json(titleArray);
  });
});


module.exports = router;
