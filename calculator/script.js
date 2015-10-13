//Part 1
//Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init().

//window.addEventListener("load", init, false);
//} 

//Part 2
//Create the user-defined function called init().

//window.addEventListener("load", init, false);
//function init() {
//}

//Part 3
//Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls.

//Part 4
//For the equal button, call a function called calculate(). You will not pass any arguments into this function.

//Part 5
//Create a user-defined function called enter() that accepts val as an argument. 

//Part 6
//Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.

//Part 7
//Create a user-defined function called calculate() that doesn’t accept any arguments.

//Part 8
//Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.



//VERSION 1 with EventListeners on each button.

//function enter() {
//    this.val = document.getElementById(this.id);
//    document.getElementById('result').value += this.val.value;
//}
//window.addEventListener("load", init, false);
//function init() {
//    seven.addEventListener("click", enter, false);
//    enter;
//
//    eight.addEventListener("click", enter, false);
//    enter;
//
//    nine.addEventListener("click", enter, false);
//    enter;
//
//    divide.addEventListener("click", enter, false);
//    enter;
//
//    four.addEventListener("click", enter, false);
//    enter;
//
//    five.addEventListener("click", enter, false);
//    enter;
//
//    six.addEventListener("click", enter, false);
//    enter;
//
//    three.addEventListener("click", enter, false);
//    enter;
//
//    multiply.addEventListener("click", enter, false);
//    enter;
//
//    one.addEventListener("click", enter, false);
//    enter;
//
//    two.addEventListener("click", enter, false);
//    enter;
//
//    three.addEventListener("click", enter, false);
//    enter;
//
//    subtract.addEventListener("click", enter, false);
//    enter;
//
//    zero.addEventListener("click", enter, false);
//    enter;
//
//    period.addEventListener("click", enter, false);
//    enter;
//
//    add.addEventListener("click", enter, false);
//    enter;
//
//    equal.addEventListener("click", calculate, false);
//    }
//    function calculate() {
//    var grabField = document.getElementById('result').value;
//    var makeString = grabField.toString();
//    var finalAnswer = window.eval(makeString);
//    document.getElementById('result').value = finalAnswer;
//}

//Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 

//HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….

//VERSION 2 with EventListeners on body.

var body = document.querySelector("body");
body.addEventListener("click", function (event) {
    "use strict";
    var currentButton =  event.target.id.toString();
    if (currentButton === "equal") {
        var grabField = document.getElementById('result').value;
        var makeString = grabField.toString();
        var finalAnswer = window.eval(makeString);
        document.getElementById('result').value = finalAnswer;
    } else {
        this.val = document.getElementById(event.target.id);
        document.getElementById('result').value += this.val.value;
    }
}
    );