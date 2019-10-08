// dependencies
var express = require("express");
var path = require("path")

// set up express
var app = express();

var PORT = process.env.PORT || 3000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./app/data/friends");

//html routes
app.get("/", function (req,res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// api/friends display all tables
app.get("/api/friends", function (req, res) {
    retrun res.json(friends);
});

// post api/friends
app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;
    var totalDifference;

    console.log(newFriend);

    var match = {
        name: "",
        photo: "",
        difference: 999
    }

    
})


