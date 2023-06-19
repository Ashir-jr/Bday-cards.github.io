// Function to check if the user is on a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to add mobile-specific behavior
function setupMobileBehavior() {
  // Hide the shuffle button
  $(".tarot-card").off("click"); // Remove click event on cards
}

// Function to add desktop-specific behavior
function setupDesktopBehavior() {
  var count = 0;

  $(".tarot-card").click(function () {
    var card = $(this);
    if (count < 11) {
      $(this).removeClass("top").addClass("bottom");

      count++;
    }
    if (count == 11) {
      $("div").removeClass("bottom");

      count = 0;
    }
    shuffle(card);
  });
}

$(document).ready(function () {
  if (isMobileDevice()) {
    setupMobileBehavior();
  } else {
    setupDesktopBehavior();
  }
});
