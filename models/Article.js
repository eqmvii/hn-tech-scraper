let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;
