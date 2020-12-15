// Open Weather API Key
var apiKey = "d1aed9e0dce49c617b21383eb6b512c6";

$("#search-form").on("submit", function (e) {
  e.preventDefault();

  if ($("#search-input").val()) {
    saveSearch($("#search-input").val());

    $("#search-input").val("");
  }
});

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

  getSearchHistory().forEach((item) => {
    searchMenu.append(listItem(item));
  });
}

function renderSelectedCity() {
  $("#sel-city-name").text(getSelectedCity());
}

function getSearchHistory() {
  return JSON.parse(localStorage.getItem("search-history"));
}

function saveSearch(search) {
  var search = search.toLowerCase().trim();
  var history = [];
  if (getSearchHistory() !== null) {
    history = getSearchHistory();
  }

  if (!history.includes(search)) {
    if (history.length >= 8) history.pop();
    history.unshift(search);
    localStorage.setItem("search-history", JSON.stringify(history));

    renderSearchHistory();
  }
}

function getSelectedCity() {
  var city = localStorage.getItem("selected-city");

  // Return the selected city or default to Melbourne if none.
  return city ? city : "Melbourne";
}

function setSelectedCity(city) {
  localStorage.setItem("selected-city", city);
  renderSelectedCity();
}

function init() {
  renderSearchHistory();
  renderSelectedCity();
}

init();
