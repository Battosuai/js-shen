console.log("full screen");

let image = document.querySelector("img");

image.addEventListener("click", function (e) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    image.requestFullscreen();
  }
});

image.addEventListener("dblclick", function (e) {
  document.exitFullscreen();
});

document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenElement) {
    console.log("fullscreen mode activated");
  } else {
    console.log("fullscreen mode deactivated");
  }
});

// Notes:
// Provide user-friendly controls for entry and exit: if you are implementing fullscreen on images, you should activate it when the user clicks on the image and exit when the user double tab or presses the backspace button. Similar user-friendly methods can be used on video and canvas elements. Also, make sure you notify the user when they enter and exit fullscreen.
// Ensure fallback options for non-supported browsers: If a user is trying to activate fullscreen from an unsupported browser, you should alert them of this incompatibility.
// If you are using fullscreen on iframes that links to external sources, don’t forget to set the allow = 'fullscreen' attribute
