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
