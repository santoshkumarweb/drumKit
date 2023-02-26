var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      playAudio("tom-2");
      break;
    case "s":
      playAudio("tom-3");
      break;
    case "d":
      playAudio("tom-4");
      break;
    case "f":
      playAudio("tom-1");
      break;
    case "j":
      playAudio("crash");
      break;
    case "k":
      playAudio("kick-bass");
      break;
    case "l":
      playAudio("snare");
      break;
    default:
      console.log("Some unexpected key pressed");
  }
}

function playAudio(drum) {
  var audio = new Audio("sounds/" + drum + ".mp3");
  audio.play();
}

function buttonAnimation(currentKey) {
  var currentbutton = document.querySelector("." + currentKey);
  currentbutton.classList.add("pressed");
  setTimeout(function () {
    currentbutton.classList.remove("pressed");
  }, 100);
}
