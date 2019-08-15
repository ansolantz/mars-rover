
const Rover = require('./rover');
const Grid = require('./grid');
const fs = require('fs');

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');


processFileInstructions = (instructions) => {
    console.log('Reading instructions from the file:')

    const plateauSize = instructions[0].split(' ');
    const xSize = parseInt(plateauSize[0]);
    const ySize = parseInt(plateauSize[1]);
 
    const plateauGrid = new Grid(xSize, ySize);
    console.log('Plateau size: ' + xSize + ' x ' + ySize)

    let roverIndex = 1;
    for (let i = 1; i < instructions.length; i = i + 2) {
        const startPosition = instructions[i].split(' ');
        const startX = parseInt(startPosition[0]);
        const startY = parseInt(startPosition[1]);
        const startDirection = startPosition[2];

        const myRover = new Rover(startX, startY, startDirection);
        const movements = instructions[i + 1].split('');

        console.log('\nMoving rover ' + roverIndex);
        //console.log(movements)
        movements.forEach(move => {
            if (move === "M") {
                myRover.moveForward();
            } else if (move === "L") {
                myRover.turnLeft();
            } else if (move === "R") {
                myRover.turnRight();
            }
        });
        
        console.log('------------------------');
        roverIndex++;
        
    }
}

// Prompt user to input data in console.
console.log('*******************************************************');
console.log('Please input text in command line to move the rover.');
console.log('The valid commands are: ‘L’, ‘R’ and ‘M’.');
console.log('‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot.');
console.log('‘M’ moves the rover forward one grid point.\n');

console.log('You can also run commands from a file. The file name is ’process-instructions.txt’');
console.log('The program will move rover(s) from the instructions in the file’');
console.log('To load the file, please type ‘load’ in command line.\n')

console.log('To exit, type ‘exit’.')
console.log('******************************************************');


const plateau = new Grid(5, 5);
const rover1 = new Rover(0, 0, 'N');


// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log('User input complete, program exit.');
        process.exit();
    }
    else if (data === 'load\n') {
        // Loading instructions from file.
        const instructions = fs.readFileSync('./__tests__/process-instructions.txt', 'utf-8').split('\n');
        console.log("instructions from file: ", instructions)
        processFileInstructions(instructions);

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
    else {
        // Print user input in console.
        console.log(data.replace(/(\r\n|\n|\r)/gm, "") + ' is not a valid command!');
    }
});







