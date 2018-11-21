var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Handle POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("Application started on port " + PORT);
});
