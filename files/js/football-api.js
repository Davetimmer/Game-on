var teams = [338, 62, 354, 65, 66, 57, 64, 61, 5, 4, 674, 675, 678, 524, 548, 559, 86, 78, 81, 109, 100, 113];
var totalScore = 0;

$(document).ready(function() {

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
		$("#position1").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality1").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value1").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
		$("#answer1").submit(function() {
			if ($("#answer1").val().toLowerCase() === playerName.toLowerCase()) {
			console.log("Congratulations");
			} else {
			console.log("WRONG!");
			};
		return false;	
		});
	}); 

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
		$("#position2").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality2").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value2").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);

		var userAnswer = document.getElementById("answer2").value();
		$("#answer2").submit(function() {
			if (userAnswer.toLowerCase() === playerName.toLowerCase()) {
				totalScore += 1;
				alert("Congrats!");
				// console.log(totalScore);
			} else {
				totalScore = totalScore;
				// console.log(totalScore);
			};
		return false;
		});
	});

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
		$("#position3").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality3").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value3").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position4").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality4").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value4").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position5").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality5").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value5").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position6").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality6").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value6").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position7").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality7").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value7").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position8").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality8").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value8").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position9").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality9").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value9").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

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
		$("#position10").append(playerPosition);
		var playerNationality = response.players[number].nationality;
		$("#nationality10").append(playerNationality);
		var playerMarketValue = response.players[number].marketValue;
		$("#market-value10").append(playerMarketValue);
		console.log(playerName, playerPosition, playerNationality, playerMarketValue);
	});

});

$(document).ready(function() {
	$(".panel-header").click(function() {
		$(".panel-body", this).hide();
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