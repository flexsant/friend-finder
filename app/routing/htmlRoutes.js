var path = require("path");

module.exports = function (app) {
    // index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    //tables.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
};
