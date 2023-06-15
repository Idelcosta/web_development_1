var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting click presss
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //  this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });

}


//Detecting Keyboard press
document.addEventListener("keypress", function(event) {
makeSound(event.key);
buttonAnimation(event.key);
});



function makeSound(key) {

    switch (key) {
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "d": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "f": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "j": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "k": 
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
        break;

        case "l": 
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
        break;

        case ";":  
            var tom7 = new Audio("sounds/kick-bass.mp3");
            tom7.play();
        break;

        default:
        break;
    }

}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    active.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
} 