function renderSearchHistory() {
  var searchMenu = $(".nav-menu");
  searchMenu.empty();

  var listItem = function (name) {
    var item = $('<a href="#">');
    item.append($("<li>").text(name));
    item.data("name", name);
    item.on("click", function (e) {
      e.preventDefault();
      setSelectedCity($(this).data("name"));
    });

    return item;
  };

  if (getSearchHistory()) {
    getSearchHistory().forEach((item) => {
      searchMenu.append(listItem(item));
    });
  }
}

function renderSelectedCity(data) {
  $("#sel-city-icon").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  $("#sel-city-name").text(getSelectedCity());
  $("#sel-city-temp").text(Math.round(data.temp) + "˚");
  $("#sel-city-humidity").text("Humidity: " + data.humidity + "%");
  $("#sel-city-wind").text("Wind Speed: " + Math.round(data.wind_speed) + "KM/H");
  $("#sel-city-uv").text("UV Index: " + data.uvi);
}

function renderForecast(data) {
  var container = $("#forecast-cards");
  container.empty();
  for (var i = 1; i <= 5; i++) {
    var card = $("<div>").addClass("card forecast-card full-width");
    var dayTitle = $("<h4>").text(
      moment()
        .add(i + 1, "days")
        .format("dddd")
    );

    var stats = $("<div>").addClass("card-stats");
    stats.append($("<img>").attr("src", `http://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`));
    stats.append($("<p>").text(`Temp: ${Math.round(data[i].temp.max)}˚/${Math.round(data[i].temp.min)}˚`));
    stats.append($("<p>").text(`Humidity: ${Math.round(data[i].humidity)}%`));

    card.append(dayTitle, stats);
    container.append(card);
  }
}
