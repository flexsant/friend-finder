// dependencies
var express = require("express");
var path = require("path");

// set up express
var app = express();

var PORT = process.env.PORT || 3000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//start server-listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


