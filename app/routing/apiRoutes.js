var friends = require("../data/friends");

module.exports = function (app) {

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

        if (totalDifference <= match.difference) {
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
};
