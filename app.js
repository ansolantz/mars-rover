
const Rover = require('./rover');
const Grid = require('./grid');
const fs = require('fs');


const plateau = new Grid(5,5);
const rover1 = new Rover(0, 0, 'N');



// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log('Please input text in command line to move the rover.');
console.log('The valid commands are: ‘L’, ‘R’ and ‘M’.');
console.log('‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot.');
console.log('‘M’ moves the rover forward one grid point.');
console.log('To exit, type ‘exit’.')


// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log('User input complete, program exit.');
        process.exit();
    }
    else if (data[0] === 'L') {
        rover1.turnLeft();
    }
    else if (data[0] === 'R') {
        rover1.turnRight();
    }
    else if (data[0] === 'M') {
        rover1.moveForward();
    }
    else{
        // Print user input in console.
        console.log(data.replace(/(\r\n|\n|\r)/gm, "") + ' is not a valid command!');
    }
});




