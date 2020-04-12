var menu = null;
var sTop = null;
var peekDesktop = false;
var recycleBinCleared = false;
function showMenu(x, y) {
  shiftTop = 0;
  shiftLeft = 0;
  if (y > document.documentElement.clientHeight - 300) shiftTop = sTop;
  if (x > 300) shiftLeft = 200;
  menu.style.left = x - shiftLeft + "px";
  menu.style.top = y - shiftTop + "px";
  menu.classList.add("show-menu");
}

function hideMenu() {
  $(".show-menu").removeClass("show-menu");
}

function onContextMenu(e) {
  e.preventDefault();
  console.log("in onContextMenu");
  showMenu(e.pageX, e.pageY);
  document.addEventListener("mousedown", onMouseDown, false);
}

function onMouseDown(e) {
  var focusElement = $(e.target);
  if (!focusElement.parents(".menu").length) {
    hideMenu();
    document.removeEventListener("mousedown", onMouseDown);
  }
}

function set_menu(menuID, NumberofItemToShifttoTop) {
  console.log("in set_menu");

  window.sTop = NumberofItemToShifttoTop * 31;
  window.menu = document.getElementById(menuID);
  document.addEventListener("contextmenu", onContextMenu, false);
}

function onPeekDesktopClick() {
  peekDesktop = !peekDesktop;
  $("#hdnPeekDesktop").val(peekDesktop);
}
function onClearRecycleBin() {
  $("#hdnEmptyRecycleBin").val(true);
}
