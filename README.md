# friend-finder
[Site]( https://flexsant.github.io/friend-finder/)
## Summary
Match with a new wonderful eco-conscious and mindful friend. Simply answer ten questions designed to find you a like minded new companion.

## Visual Aids


## User Guides
- Friend-finder will ask the user 10 questions with 5 varying degrees of approvable or disapproval.
- Once the user finishes the questionare friend-finder will match them with one of ten friendly candidates.


## Code Snippet
```Javascript
// posting api/friends in api/routes
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
```
````Javascript
 //on click for form submit

     $("#submit").click(function (event) {
         event.preventDefault()
         var name = $("#name").val().trim();
         var photo = $("#photo").val().trim();
         var userAnswers = [
             $("input[name='q1']:checked").val().trim(),
             $("input[name='q2']:checked").val().trim(),
             $("input[name='q3']:checked").val().trim(),
             $("input[name='q4']:checked").val().trim(),
             $("input[name='q5']:checked").val().trim(),
             $("input[name='q6']:checked").val().trim(),
             $("input[name='q7']:checked").val().trim(),
             $("input[name='q8']:checked").val().trim(),
             $("input[name='q9']:checked").val().trim(),
             $("input[name='q10']:checked").val().trim(),
         ]
         console.log(userAnswers)

         if (userAnswers.length === 10) {
             var newFriend = {
                 name: name,
                 photo: photo,
                 scores: userAnswers
             }
             console.log("newFriend: ", newFriend);

             $.post("/api/friends", newFriend, function (match) {
                 alert(match.name);
             })
         }
     });
````


## Technologies Used
- Git - version control system to track changes to source code.
- GitHub - hosts repository that can be deployed to GitHub Pages.
- Javascript - allows dynamic interaction between user and computer data entry.
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- NODE.js - javascript run-time environment that can be run outside of browser.
- Inquirer - command line user interfaces.
- Sequelize - Capture all the data and store into a table.
- Express - A node package for server hosting.
- Node.js - Backend server.
- jQuery - A library used for server communication.
- HTML - Backbone of the site.
- CSS - For additional styling.


## Learning Points 
- Deploying Heroku was unsuccesful but will be a future feature
- GET routes displayed on JSON
- POST routes to handle to survey results
## Author
- Lex Santos - [GitHub](https://github.com/flexsant) | [LinkedIn](https://www.linkedin.com/in/lex-santos-673623194/)

