// DEPENDENCIES
var express = require("express");
var path = require('path');


// EXPRESS CONFIGURATION

var app = express();

//Setting port to 8080

var PORT = process.env.PORT || 8080;

//Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points server to "route" file
require("./routing/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

