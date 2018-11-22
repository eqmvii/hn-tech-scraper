let express = require('express');

let mongoose = require('mongoose');
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/hnTechScraper';
mongoose.connect(MONGODB_URI);

let PORT = process.env.PORT || 3000;

let app = express();


// Handle POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// TODO: require API routes
let htmlRoutes = require('./routes/htmlRoutes.js');
let scrapingRoutes = require('./routes/scrapingRoutes.js');
app.use(htmlRoutes);
app.use(scrapingRoutes);

app.listen(PORT, function() {
  console.log('Application started on port ' + PORT);
});
