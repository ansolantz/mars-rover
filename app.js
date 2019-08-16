
const Rover = require('./src/rover');
const Grid = require('./src/grid');
const fs = require('fs');

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

moveRover = (rover, movements) => {
    movements.forEach(move => {
        if (move === "M") {
            rover.moveForward();
        } else if (move === "L") {
            rover.turnLeft();
        } else if (move === "R") {
            rover.turnRight();
        } else if (move.includes('\r\n') || move.includes('\n') || move.includes('\r')) {
            //Linebreak
        } 
        else {
            console.log(move.replace(/(\r\n|\n|\r)/gm, "") + ' is not a valid command!');
        }
    });
}

processFileInstructions = (instructions) => {
    const plateauSize = instructions[0].split(' ');
    const xSize = parseInt(plateauSize[0]);
    const ySize = parseInt(plateauSize[1]);

    const plateauGrid = new Grid(xSize, ySize);
    console.log('Plateau size: ' + xSize + ' x ' + ySize)

    //console.log('Moving instructions from file:')

    let roverIndex = 1;
    for (let i = 1; i < instructions.length; i = i + 2) {
        const startPosition = instructions[i].split(' ');
        const startX = parseInt(startPosition[0]);
        const startY = parseInt(startPosition[1]);
        const startDirection = startPosition[2];

        const myRover = new Rover(startX, startY, startDirection, plateauGrid);
        const movements = instructions[i + 1].split('');

       
        console.log('\nMoving rover ' + roverIndex);
        console.log('Start position: ' + startX + ' ' + startY + ' ' + startDirection);
        console.log('Instructions: ' + movements + '\n');
        
        //console.log(movements)
        moveRover(myRover, movements);

        console.log('------------------------');
        roverIndex++;

    }
}

//Setting rover start position and plateau size 
const gridSizeX = 5;
const gridSizeY = 5;
const roverStartX = 0;
const roverStartY = 0;
const roverStartDirection = 'N';

// Prompt user to input data in console.
console.log('*********************************************************************************\n');
console.log('*** MARS ROVER ***')
console.log('Please input text in command line to move the rover.\n');

console.log('The valid commands are: ‘L’, ‘R’ and ‘M’.');
console.log('‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, \nwithout moving from its current spot.');
console.log('‘M’ moves the rover forward one grid point.\n');
console.log('The plateau size is ' + gridSizeX + ' x ' + gridSizeY);
console.log('The rovers start position is ' + roverStartX + ', ' + roverStartY + ' and the start direction is ' + '‘' + roverStartDirection + '‘.\n')

console.log('You can also run commands from a file. The file name is ’process-instructions.txt’');
console.log('The program will move rover(s) from the instructions in the file.');
console.log('These rovers are diferente from the rover you controle manually.');
console.log('To load the file, please type ‘file’ in command line.\n')

console.log('To exit, type ‘exit’.\n')
console.log('********************************************************************************');



const plateau = new Grid(gridSizeX, gridSizeY );
const rover1 = new Rover(roverStartX, roverStartY, roverStartDirection, plateau);


// When user input data and click enter key.
// Source: https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/
standard_input.on('data', (data) => {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log('User input complete, program exit.');
        process.exit();
    }
    else if (data === 'file\n') {
        // Loading instructions from file.
        const instructions = fs.readFileSync('./__tests__/process-instructions.txt', 'utf-8').split('\n');
        console.log("Instructions from file: ", instructions)
        processFileInstructions(instructions);

    } else {
        //Spliting instructions to an array
        const instructionsArray = data.split('');
        moveRover(rover1, instructionsArray);
    }
});







