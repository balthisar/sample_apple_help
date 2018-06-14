if ("HelpViewer" in window && "showTOCButton" in window.HelpViewer) {
  window.setTimeout(function () {
      window.HelpViewer.showTOCButton(true, toggleNavigation, toggleNavigation);
      window.HelpViewer.setTOCButton(true);
  }, 100);
}
function toggleNavigation() {
  var element = document.getElementById("nav");
  element.classList.toggle("hidden_thing");    }
