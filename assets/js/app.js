// Open Weather API Key
var apiKey = "d1aed9e0dce49c617b21383eb6b512c6";

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
}

init();
