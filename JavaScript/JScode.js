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
