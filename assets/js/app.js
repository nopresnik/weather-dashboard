$("#search-form").on("submit", function (e) {
  e.preventDefault();

  if ($("#search-input").val()) {
    saveSearch($("#search-input").val());

    $("#search-input").val("");
  }
});

function init() {
  renderSearchHistory();
  renderSelectedCity();
  renderForecast();
}

init();
