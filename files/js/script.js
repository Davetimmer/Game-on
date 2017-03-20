// Global variables
// for each round the user plays
// for the total score of the player
var userRound = 0;
var totalScore = 0;


// Hide the gaming content
$("#gaming").hide();

// Initialize game by adding 1 to userRound
$(document).ready(function() {
    $("#startButton").click(function() {
        userRound += 1;
        console.log(userRound);
        $("#startButton").remove();
        $("#gaming").show();
        $("#intro-text").hide()
    })
})

// Main game function
$(document).ready(function() {

    $("#userGuess").submit(function (event) {

        // userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput").value;

            if (userGuess === movie_original) {
                totalScore += 1;
                alert("Congrats!");
                // console.log(totalScore);
            } else {
                totalScore = totalScore;
                console.log(totalScore);
            };

            // return false;
        }

        // var movie = ;
        // var userGuess = document.getElementById("userInput").value;

        // if (userGuess === movie) {
        //     totalScore+= 1;
        //     console.log(totalScore);
        //     // $("#score").append(totalScore);
        // } else {
        //     totalScore = totalScore;
        //     console.log(totalScore);
        // };

        return false;

    })
})

$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults
    });
});

var i = 0;

function handleResults(response_body) {

    for (var i in response_body.genres) {
        $("#genres").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast").append(response_body.cast[i].name + ' ')
    }
}










// Testing for console logging

// function handleNewResults(response_body) {
//     console.log(response_body.keywords[0].name);
// };

// function handleNewResults(response_body) {

//     for (var i in response_body.genres) {
//         console.log(response_body.genres[i].name);
//     };
// };

// function handleCastResults(response_body) {

//         for (var i in response_body.cast) {
//             console.log(response_body.cast[i].name)
//         };
// };