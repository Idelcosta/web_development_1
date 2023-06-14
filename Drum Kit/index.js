var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting click presss
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //  this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    });

}

//Detecting Keyboard press
document.addEventListener("keypress", function(event) {
makeSound(event.sound);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/drumKit-1.mp3");
            tom1.play();
        break;

        case "a": 
            var tom2 = new Audio("sounds/drumKit-2.mp3");
            tom2.play();
        break;

        case "s": 
            var tom3 = new Audio("sounds/drumKit-3.mp3");
            tom3.play();
        break;

        case "d": 
            var tom4 = new Audio("sounds/drumKit-4.mp3");
            tom4.play();
        break;

        case "j": 
            var tom5 = new Audio("sounds/drumKit-5.mp3");
            tom5.play();
        break;

        case "k": 
            var tom6 = new Audio("sounds/drumKit-6.mp3");
            tom6.play();
        break;

        case "l": 
            var tom7 = new Audio("sounds/drumKit-7.mp3");
            tom7.play();
        break;

        default:
        break;
    }

}