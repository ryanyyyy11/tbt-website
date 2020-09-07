var MenuIndex = 1;
showMenu(MenuIndex);

function currentMenu(n) {
    showMenu(MenuIndex = n);
  }

function showMenu(n) {
    var i;
    var menu = document.getElementsByClassName("myMenu");
    var cat = document.getElementsByClassName("cat");
    if (n > menu.length) {MenuIndex = 1}
      if (n < 1) {MenuIndex = menu.length}
      for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
      }
      for (i = 0; i < cat.length; i++) {
        cat[i].className = cat[i].className.replace(" active", "");
      }
    menu[MenuIndex-1].style.display = "block";
    cat[MenuIndex-1].className += " active";
  }