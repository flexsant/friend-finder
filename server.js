// require express
var express = require("express");

//tells node we are creating an "express" server
var app = express();
//sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// middleware to interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server-listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



