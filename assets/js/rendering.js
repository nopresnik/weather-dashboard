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

function renderSelectedCity() {
  $("#sel-city-name").text(getSelectedCity());
}

function renderForecast() {
  var container = $("#forecast-cards");
  container.empty();
  for (var i = 0; i < 5; i++) {
    var card = $("<div>").addClass("card forecast-card full-width");
    var dayTitle = $("<h4>").text(
      moment()
        .add(i + 1, "days")
        .format("dddd")
    );

    var stats = $("<div>").addClass("card-stats");
    stats.append($("<p>").text("Temp: xx"));
    stats.append($("<p>").text("Humidity: xx"));

    card.append(dayTitle, stats);
    container.append(card);
  }
}
