alert("Hello");
// function-message-end of the insturction: part of a js code statement
// Best practice in style for js is not using space between words

var myName = "Costa";
//Keyword-name of variabble-value

//to change the name of the variable:
myName = "Idel";

var yourName = prompt("What is your name");
//will store the name intered by the user as a variable called name

myName.length  // find length of the string
myName.slice  //slice the string like cutting off extra words in tweet
myName.toUpperCase() or myName.toLowerCase()

//change name to first character lower case using slice and .... 
var name = prompt("what is your naame: ");
var firstchar  = name.slice(0,1);
var upperCaseFirstChar = firstchar.toUpperCase();
var restChar = name.slice(1,name.length);
var restCharLower = restchar.toLowerCase()
alert("Name: "+ upperCaseFirstChar + restCharLower);

//Create a function
function getShoes() {
    lakkfalks;
    agkl'f;ga;
    amg';
}
//Call the function
getShoes()

//   Example
function getMilk(bottles) {
    var cost = bottles * 1.5;
    //Do something with the cost
    return money % 1.5;
}
get Milk(2);
var change = getMilk(4) //capture and save the result of the function given by return

Consol.log //is meant for the developper to be able to debug the code, show up in the consol

Math.floor() // it is how to round down a number in js



///////////////////////////////////Boolean, control statements/////////////////////////////////

if (track === "clear") {
    goStraight();
} //example of boolean...
else {
    turnRight();
}

even though they all check equality, the triple equal will check the data types
&& AND
|| or

var guestList = [1, 3, 5, 8, 4, 0];
guestList.length
var guestCount = [5, 7, 8, 3];
guestCount.includes(guestList);

///////
var output = []
output.push(1); 
now output is [1]. The new elt will be added at the end
using output.pop() removes the last elt in the array


Prints fizz for multiples of 3 and Buzz for multiples of 5 and FizzBuzz for the one of Both 
var output = [];
var i = 1;

function fizzBuzz() {    

    if (i % 3 === 0 && i % 5 ===0 ) {
        output.push("FizzBuzz");
    }
        
    else if (i % 3 === 0) {
        output.push("fizz");    
    }

    else if (i % 5 === 0) {
        output.push("buzz");
    }
    
    else {
        output.push(i);
    }
    
    i++;
    
    console.log(output);   
}




var names = ["angela", "costa", "san", "Kevine", "Hope"];

function whoisPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch toda!";
}





///////////////////////////////////          Loops statements         /////////////////////////////////

function fizzBuzz() {    

    while (i <= 100) {
        
        if (i % 3 === 0 && i % 5 ===0 ) {
            output.push("FizzBuzz");
        }
            
        else if (i % 3 === 0) {
            output.push("fizz");    
        }

        else if (i % 5 === 0) {
            output.push("buzz");
        }
        
        else {
            output.push(i);
        }
        
        i++;
    } 
    
    console.log(output);   
}


function fibonacciaGenerator(n) {  //the fibonacci numbers...
    
    var output = [];
    if (n ===1) {
        output = [0];
    }
    else if (n ===2) {
        output = [0,1];
    }
    else {
        output = [0,1];
        
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
} 



////////////////////////////////  DOM: Document Object Model  /////////////////////////////////
Dominating the DOM to add functionality to HTML elts 
any html objects has two...: property (.innerhtml, .style, .firstChild) and methods(.click(), .appendChild(), .setAttribute())
all of them accessed with javaScript by using a .notation

document.querySelector("...");
document.querySelector("button").classList; gives the lists of classes attached to it
document.querySelector("button").classList.add("invisible"); adds new class invisible
document.querySelector("h1").classList.add("huge"); change the h1 with the css huge by using javaScript

The attributes are: class, href... all colored in orange
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
