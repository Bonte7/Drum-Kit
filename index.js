
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Clicks

//loop through the buttons on the page
for (let i = 0; i < numberOfDrumButtons; i++) {

  //listen for click events on each of the page buttons with the ".drum" class
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {

    //get the innerHTML of the button that was clicked and pass it to makeSound() for click events
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  }

}

// Keyboard Press

//listen for keydown evets and pass the event key to makeSound()
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


//Handle Events

//this function handles the different click or keydown events and compares them to play audio
function makeSound(key) {

  switch (key) {

    case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

    case "a":
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

    case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

    case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

    case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

    case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

    case "l":
        let kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;

    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
