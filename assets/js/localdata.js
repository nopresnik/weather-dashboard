function getSearchHistory() {
  return JSON.parse(localStorage.getItem("search-history"));
}

function getSelectedCity() {
  var city = localStorage.getItem("selected-city");

  // Return the selected city or default to Melbourne if none.
  return city ? city : "Melbourne";
}

function saveSearch(search) {
  var search = search.toLowerCase().trim();
  var history = [];

  setSelectedCity(search);

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

function setSelectedCity(city) {
  localStorage.setItem("selected-city", city);
  renderSelectedCity();
  renderForecast();
}
