var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
   //  btn.innerHTML = "Pause";
  } else {
    video.pause();
   //  btn.innerHTML = "Play";
  }
}

$(document).ready(function () {
  var input = $('input');
  var button = $('#button-container');
  input.focus(function () {
       button.addClass('show');
  });
  input.focusout(function () {
       if (!input.val()) {
            button.removeClass('show');
       }
  });
});