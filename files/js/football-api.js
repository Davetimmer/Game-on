var teams = [338, 62, 354, 65, 66, 57, 64, 61, 5, 4, 674, 675, 678, 524, 548, 559, 86, 78, 81, 109, 100, 113];
var teamNumber = teams[Math.floor(Math.random() * (teams.length + 1))];

$.ajax({
	headers: { 'X-Auth-Token': '9221c7d370d8437a8b131dc147f509e1' },
	url: "http://api.football-data.org/v1/teams/" + teamNumber + "/players",
	dataType: 'json',
	type: 'GET',
}).done(function(response) {
	var number = 1 + Math.floor(Math.random() * response.count);
	var playerName = response.players[number].name;
	var jerseyNumber = response.players[number].jerseyNumber;
	var playerPosition = response.players[number].position;
	$("#position").append(playerPosition);
	var playerNationality = response.players[number].nationality;
	$("#nationality").append(playerNationality);
	var playerMarketValue = response.players[number].marketValue;
	$("#market-value").append(playerMarketValue);
	console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	$("#answer").submit(function() {
		if ($("#answer").val().toLowerCase() === playerName.toLowerCase()) {
		console.log("Congratulations");
		} else {
		console.log("WRONG!");
		};
	});
}); 

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