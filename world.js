var POSSIBLE_COUNTRIES = [
    'Netherlands', 'Switzerland', 'Turkey', 'United States', 'United Kingdom', 'France',
    'Spain', 'Belgium', 'Israel', 'India', 'Australia', 'China', 'Germany' , 'Korea', 'Italy',
    'Poland', 'Canada', 'Portugal', 'South Africa', 'Japan', 'Hong Kong', 'New Zealand', 'Brazil',
    'Peru', 'Mexico', 'Philippines', 'Egypt', 'Morroco', 'Sweden', 'Denmark'
  ],
  targetCountryName = selectRandomCountry();

$(document).ready(function() {
  displayCountryImages(targetCountryName);

  $('#refresh').click(function() {
  	location.reload();
  });

  $('#generate_new').click(function() {
    var guessedName = $('#input').val();

    if (guessedName.toLowerCase() === targetCountryName.toLowerCase()) {
      alert("You've guessed it right, well done! Let's see how good you are for the next guess");
      targetCountryName = selectRandomCountry();
      displayCountryImages(targetCountryName);
    } else {
      alert('Wrong country name! Call your geography teacher...');
    }
  });
});

function selectRandomCountry() {
  var randomIndex = Math.floor(Math.random() * (POSSIBLE_COUNTRIES.length - 1));
  return POSSIBLE_COUNTRIES[randomIndex];
}

function displayCountryImages(countryName) {
  $('#photo_container img').attr('src', '');
  $.ajax({
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data: {
      key: '2409187-ee958c2d8895c6eb14d3ce314',
      order: 'latest',
      per_page: '20',
      q: countryName
    },
    success: function(responseBody) {
      var threeCountryImageURLs = [
        responseBody.hits[0].webformatURL,
        responseBody.hits[1].webformatURL,
        responseBody.hits[3].webformatURL,
        responseBody.hits[5].webformatURL,
        responseBody.hits[7].webformatURL,
        responseBody.hits[9].webformatURL,
        responseBody.hits[11].webformatURL,
        responseBody.hits[13].webformatURL
      ];

      threeCountryImageURLs.forEach(function(imageURL, index) {
        $('#photo_container img').eq(index).attr('src', imageURL);
      });
    }
  });
}