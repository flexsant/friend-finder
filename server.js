// dependencies
var express = require("express");
var path = require("path");

// set up express
var app = express();

var PORT = process.env.PORT || 3000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./app/data/friends");

//html routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

//tables.html
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// api/friends display all tables
app.get("/api/friends", function (req, res) {
    return res.json(friends);
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

for (var i = 0; i < friends.length; i++) {
    currentFriend = friends[i];
    currentFriendScores = friends[i].scores;

    totalDifference = 0;

    for (var j = 0; j < currentFriendScores.length; j++) {
        var difference = 0;
        //the current score we are looping over of the friend from the json
        currentFriendScore = currentFriendScores[j];
        //the same index of the scores from the newFriend
        newFriendScore = newFriendScores[j];
        //figure out the difference
        difference = Math.abs(parseInt(currentFriendScore) - parseInt(newFriendScore));
        //figure out the difference and add it to the totalDifference
        totalDifference += difference
    }

    if(totalDifference <= match.difference) {
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.difference = totalDifference;
    }
}

    //push new friend to friend array, happens at the very end
    friends.push(newFriend);
    //send match to front end
    res.json(match);
});
    //start server-listener
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });


