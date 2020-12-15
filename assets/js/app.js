$(document).ready(function () {
  $("#search-form").on("submit", function (e) {
    e.preventDefault();

    if ($("#search-input").val()) {
      saveSearch($("#search-input").val());

      $("#search-input").val("");

      renderSearchHistory();
    }
  });

  function renderSearchHistory() {
    var searchMenu = $(".nav-menu");
    searchMenu.empty();

    var listItem = function (name) {
      var item = $('<a href="#">');
      item.append($("<li>").text(name));

      return item;
    };

    getSearchHistory().forEach((item) => {
      searchMenu.append(listItem(item));
    });
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
    }

    console.log(history);
  }

  function init() {
    renderSearchHistory();
  }

  init();
});
