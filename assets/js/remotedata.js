// Open Weather API Key
var apiKey = "d1aed9e0dce49c617b21383eb6b512c6";
var apiForecastURL = "http://api.openweathermap.org/data/2.5/forecast";

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
function getForecast(city) {
  // console.log(`${apiForecastURL}?q=${city}&appid=${apiForecastURL}`);
  $.ajax({
    url: `${apiForecastURL}?q=${city}&units=metric&appid=${apiKey}`,
    success: function (res) {
      parseForecast(res);
    },
  });
}

function parseForecast(data) {
  console.log(data);
}
