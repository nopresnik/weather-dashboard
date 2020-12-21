// Open Weather API Key
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?appid=d1aed9e0dce49c617b21383eb6b512c6&units=metric&exclude=minutely,hourly,alerts";

function getWeather(location, cb) {
  getCoordsFromLocation(location, function(res_loc) {
    var lat = res_loc.lat;
    var lon = res_loc.lon;
    var url = apiUrl + `&lat=${lat}&lon=${lon}`;

    $.ajax({
      url: url,
      success: function(res) {
        // Render the data
        // console.log(res);
        if (cb) cb(res);
      }
    })
  });
}

function getCoordsFromLocation(location, cb) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${location}&format=json&accept-language=en&limit=1&polygon_threshold=0.0`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "ixAie5Ghfgmsh9LoyF33FoV3i8jkp1u32SjjsnGIH86iebObCj",
      "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    var result = {
      displayName: response[0].display_name,
      lat: response[0].lat,
      lon: response[0].lon,
    }
    if (cb) cb(result);
  });
}