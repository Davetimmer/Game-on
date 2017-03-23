// Global variables
// for each round the user plays
// for the total score of the player
var userRound = 0;
var totalScore = 0;
var i = 0;

// Hide the gaming content
$("#gaming").hide();

// Initialize game
$(document).ready(function() {
    $("#startButton").click(function() {
        $("#startButton").remove();
        $("#gaming").show();
        $("#intro-text").hide()
    })
})

// Main game function Movie 1
$(document).ready(function() {

    $("#userGuess1").submit(function(event) {

        userRound += 1;
        console.log(userRound);

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput1").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent1").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 2
$(document).ready(function() {

    $("#userGuess2").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3315342?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput2").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent2").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 3
$(document).ready(function() {

    $("#userGuess3").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2277860?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput3").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent3").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 4
$(document).ready(function() {

    $("#userGuess4").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1431045?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput4").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent4").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 5
$(document).ready(function() {

    $("#userGuess5").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2084970?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput5").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent5").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 6
$(document).ready(function() {

    $("#userGuess6").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt4975722?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput6").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent6").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 7
$(document).ready(function() {

    $("#userGuess7").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2582802?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput7").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent7").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 8
$(document).ready(function() {

    $("#userGuess8").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0068646?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput8").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent8").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 9
$(document).ready(function() {

    $("#userGuess9").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3783958?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput9").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent9").slideToggle("medium");
            } else {
                alert('Oops... Try again!');
                totalScore = totalScore;
            };

        }

        return false;

    });
});

// Main game function Movie 10
$(document).ready(function() {

    $("#userGuess10").submit(function(event) {

        userRound += 1;

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1049413?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults
        });

        function handleResults (response_body) {
            var movie_original = response_body.original_title;
            var userGuess = document.getElementById("userInput10").value;

            if (userGuess.toLowerCase() === movie_original.toLowerCase()) {
                totalScore += 1;
                alert("Congrats! You scored one point.")
                $("#score").remove();
                var p = $(document.createElement('p'))
                p.attr('id', 'score');
                p.appendTo("#scores");
                $("#score").append(totalScore + "/10");
                $("#movieContent10").slideToggle("medium");
            } else if (userGuess.toLowerCase() != movie_original.toLowerCase()) {
                alert('Oops... Try again!');
                totalScore = totalScore;
                // $("#movieContent10").slideToggle("medium");
                // $("#score").append(totalScore + "/10")
                // $("#score").show();
            };

        }

        return false;

    });
});



// $(document).ready(function() {

//     if (userRound === 1) {
//         $.ajax({
//             url: 'https://api.themoviedb.org/3/movie/tt2277860?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
//             method: 'GET',
//             success: handleResults
//         });

//         function handleResults(response_body) {

//             var p = $(document.createElement('p'))
//             p.attr('id', 'genres');
//             p.appendTo("#genres_section");

//             for (var i in response_body.genres) {
//                 $("#genres").append(response_body.genres[i].name + ' ');
//             };
//         };
//     };
// });


// API CALL MOVIE 1
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults1
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults1
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0369610/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults1
    });
});

// END API CALL MOVIE 1


// PUSH ELEMENTS TO HTML MOVIE 1

function handleResults1(response_body) {

    for (var i in response_body.genres) {
        $("#genres").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults1(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults1(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 2


// API CALL MOVIE 2
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3315342?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults2
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3315342/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults2
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3315342/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults2
    });
});

// END API CALL MOVIE 2


// PUSH ELEMENTS TO HTML MOVIE 2

function handleResults2(response_body) {

    for (var i in response_body.genres) {
        $("#genres2").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults2(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords2").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults2(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast2").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 2


// API CALL MOVIE 3
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2277860?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults3
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2277860/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults3
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2277860/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults3
    });
});

// END API CALL MOVIE 3


// PUSH ELEMENTS TO HTML MOVIE 3

function handleResults3(response_body) {

    for (var i in response_body.genres) {
        $("#genres3").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults3(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords3").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults3(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast3").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 3


// API CALL MOVIE 4
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1431045?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults4
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1431045/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults4
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1431045/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults4
    });
});

// END API CALL MOVIE 4


// PUSH ELEMENTS TO HTML MOVIE 4

function handleResults4(response_body) {

    for (var i in response_body.genres) {
        $("#genres4").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults4(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords4").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults4(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast4").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 4


// API CALL MOVIE 5
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2084970?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults5
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2084970/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults5
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2084970/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults5
    });
});

// END API CALL MOVIE 5


// PUSH ELEMENTS TO HTML MOVIE 5

function handleResults5(response_body) {

    for (var i in response_body.genres) {
        $("#genres5").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults5(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords5").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults5(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast5").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 5


// API CALL MOVIE 6
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt4975722?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults6
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt4975722/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults6
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt4975722/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults6
    });
});

// END API CALL MOVIE 6


// PUSH ELEMENTS TO HTML MOVIE 6

function handleResults6(response_body) {

    for (var i in response_body.genres) {
        $("#genres6").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults6(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords6").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults6(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast6").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 6


// API CALL MOVIE 7
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2582802?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults7
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2582802/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults7
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt2582802/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults7
    });
});

// END API CALL MOVIE 7


// PUSH ELEMENTS TO HTML MOVIE 7

function handleResults7(response_body) {

    for (var i in response_body.genres) {
        $("#genres7").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults7(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords7").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults7(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast7").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 7


// API CALL MOVIE 8
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0068646?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults8
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0068646/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults8
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt0068646/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults8
    });
});

// END API CALL MOVIE 8


// PUSH ELEMENTS TO HTML MOVIE 8

function handleResults8(response_body) {

    for (var i in response_body.genres) {
        $("#genres8").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults8(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords8").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults8(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast8").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 8


// API CALL MOVIE 9
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3783958?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults9
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3783958/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults9
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt3783958/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults9
    });
});

// END API CALL MOVIE 9


// PUSH ELEMENTS TO HTML MOVIE 9

function handleResults9(response_body) {

    for (var i in response_body.genres) {
        $("#genres9").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults9(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords9").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults9(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast9").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 9


// API CALL MOVIE 10
$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1049413?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleResults10
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1049413/keywords?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleKeywordResults10
    });
});


$(document).ready(function(){

        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/tt1049413/credits?api_key=1325cbed4f1664b3ffbb23f3a7fbb77f',
            method: 'GET',
            success: handleCastResults10
    });
});

// END API CALL MOVIE 10


// PUSH ELEMENTS TO HTML MOVIE 10

function handleResults10(response_body) {

    for (var i in response_body.genres) {
        $("#genres10").append(response_body.genres[i].name + ' ');
    };
};

function handleKeywordResults10(response_body) {

    for (i = 0; i <= 4; i ++) {
        $("#keywords10").append(response_body.keywords[i].name + ' ')
    };
};

function handleCastResults10(response_body) {

    for (i = 0; i <= 2; i ++) {
        $("#cast10").append(response_body.cast[i].name + ' ')
    }
}

// END PUSH ELEMENTS TO HTML MOVIE 10




// Toggle the panels

$(document).ready(function() {

    $("#movie1").click(function() {
        $("#movieContent1").slideToggle("medium");
    })

    $("#movie2").click(function() {
        $("#movieContent2").slideToggle("medium");
    })

    $("#movie3").click(function() {
        $("#movieContent3").slideToggle("medium");
    })

    $("#movie4").click(function() {
        $("#movieContent4").slideToggle("medium");
    })

    $("#movie5").click(function() {
        $("#movieContent5").slideToggle("medium");
    })

    $("#movie6").click(function() {
        $("#movieContent6").slideToggle("medium");
    })

    $("#movie7").click(function() {
        $("#movieContent7").slideToggle("medium");
    })

    $("#movie8").click(function() {
        $("#movieContent8").slideToggle("medium");
    })

    $("#movie9").click(function() {
        $("#movieContent9").slideToggle("medium");
    })

    $("#movie10").click(function() {
        $("#movieContent10").slideToggle("medium");
    })
})

// Show total score
$("#scorebutton").click(function() {
    // $("#scorebutton").hide();
    $("#score").remove();
    var p = $(document.createElement('p'))
    p.attr('id', 'score');
    p.appendTo("#scores");
    $("#score").append(totalScore + "/10");
    $("#scores").show()
})

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