var cache = new LastFMCache();
 
var lastfm = new LastFM({
    apiKey    : '150aff380ca87d9b4280b18048a23bc0',
    apiSecret : 'f9b902d8d3e619ab3cbc0c4bfbe242e6',
    cache     : cache
});

window.document.onload = lastfm.user.getTopArtists({
    user: '',
    limit: 10
},
{
    success: function(data) {
        // do something
    },
    error: function(data) {
        alert(data.error + " " + data.message);
    }
});

var list = '<ol>';
for (var i = 0; i < data.topartists.artist.length; i++) {
    list += '<li>' + data.topartists.artist[i].name + '</li>';
}
document.getElementById('topartists').innerHTML = list + '</ol>'

var api_key = 'your_api_key';
var cb = 'your_callback_url';
window.location = 'http://www.last.fm/api/auth/?api_key=' + api_key + '&cb=' + cb;
var token = $.url().param('token');

lastfm.auth.getSession({
    token: token
},
{
    success: function(data_sess) {
        // do something
    },
    error: function(data_sess_error) {
        // error msg
    }
});

lastfm.user.getRecommendedArtists({
    user: user,
    limit: 10
},
    data_sess.session,
{
    success: function(data_recs) {
         // do something
    },
    error: function(data_recs_error) {
        // error msg
    }
});


var artist;
var track;
var chosenTrack;
var chosenArtist;
var trackName;

function art(value){
  artist = document.getElementById('artist').value;
}
function tr(value){
  track = document.getElementById('track').value;
}

function randomTrack(){
    var API_KEY = 'c504f7a4e5ce3a3a0c53b99723654e9b';
    var URLTR = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key="+API_KEY+"&format=json";
    console.log(URLTR);
    $.getJSON(URLTR, function getTrack(data){
        //console.log(data);
        var randomNumber = Math.floor((Math.random() * 50) + 1);
        //console.log(data.tracks.track[randomNumber].name);
        chosenTrack = data.tracks.track[randomNumber].name; 
        chosenArtist = data.tracks.track[randomNumber].artist.name;
        

        chosenTrack = chosenTrack.replace(/\s/g,'%20');
        chosenArtist = chosenArtist.replace(/\s/g,'%20');
        chosenTrack = chosenTrack.replace(/'/g,'%27');
        chosenArtist = chosenArtist.replace(/'/g,'%27')
        console.log(chosenTrack);
        console.log(chosenArtist);
        show(chosenTrack,chosenArtist);
        });
}


function show(chosenTrack,chosenArtist){
    $("#Summary").empty();
    
    var API_KEY = 'c504f7a4e5ce3a3a0c53b99723654e9b';
    var URL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+API_KEY+"&artist="+chosenArtist+"&track="+chosenTrack+"&format=json";
    console.log(URL);
    $.getJSON(URL, function(data){
        console.log(data);
    var trackSummary = JSON.stringify(data.track.wiki.summary) // get track summary from JSON output
    trackName = chosenTrack.toLowerCase();
    trackName = trackName.replace(/%20/g,' ');
    trackName = trackName.replace(/%27/g,"'"); 
    var re = new RegExp(trackName, 'g');
    trackSummary = trackSummary.toLowerCase();
    var trackSummaryN = trackSummary.replace( re, "xxx"); //replace track title in the summary with xxx
    console.log(trackSummaryN);
    console.log(trackName);
    $("#Summary").append(trackSummaryN);
});
};

function check(value){
    $("#result").empty();
    if (track === trackName) {
        $("#result").append("well done!");
    } else {
        $("#result").append("nope");
    }
};

// Teams: 
// 338 Leicester
// 62 EVerton
// 354 Tottemham
// 65 Manchester City
// 66 Manchester United
// 57 Arsenal
// 64 Liverpool
// 61 Chelsea
// 5 Bayern Munchen
// 4 Borussia Dortmund
// 674 PSV
// 675 Feijenoord
// 678 Ajax 
// 524 PSG
// 548 Monaco
// 559 Sevilla
// 86 Real Madrid
// 78 Athletico Madrid
// 81 Barcelona
// 109 Juventus
// 100 AS Roma
// 113 Napoli