// DEPENDENCIES
var express = require("express");


// EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// require("./Spider/assets/index.html")(app);
// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});