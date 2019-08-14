const Rover = require('../rover');
const fs = require('fs');

test('Turn left', () => {
  const myRover = new Rover(0, 0, 'N');
  myRover.turnLeft();
  expect(myRover.getDirection()).toBe("W");
});

test('Process instructions for one rover', () => {

  const instructions = ['5 5', '1 2 N', 'LMLMLMLMM'];
  const startPosition = instructions[1].split(' ');
  const startX = parseInt(startPosition[0]);
  const startY = parseInt(startPosition[1]);
  const startDirection = startPosition[2];
  const movements = instructions[2].split('');

  const myRover = new Rover(startX, startY, startDirection);

  console.log(movements)
  movements.forEach(move => {
    if (move === "M") {
      myRover.moveForward();
    } else if (move === "L") {
      myRover.turnLeft();
    } else if (move === "R") {
      myRover.turnRight();
    }
  });

  expect(myRover.getPosition()).toBe("1 3 N");
});

test('Process instructions for many rovers', () => {
  const instructions = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
  const expectedOutputs = ['1 3 N', '5 1 E'];
  let roverIndex = 0;

  for (let i = 1; i < instructions.length; i = i + 2) {
    const startPosition = instructions[i].split(' ');
    const startX = parseInt(startPosition[0]);
    const startY = parseInt(startPosition[1]);
    const startDirection = startPosition[2];

    const myRover = new Rover(startX, startY, startDirection);
    const movements = instructions[i + 1].split('');

    console.log(movements)
    movements.forEach(move => {
      if (move === "M") {
        myRover.moveForward();
      } else if (move === "L") {
        myRover.turnLeft();
      } else if (move === "R") {
        myRover.turnRight();
      }
    });

    expect(myRover.getPosition()).toBe(expectedOutputs[roverIndex]);
    roverIndex++;
  }
});

test('Process instructions for rovers reading outputs from file', () => {
  const instructions = fs.readFileSync('./__tests__/process-instructions.txt', 'utf-8').split('\n');
  console.log("instructions from file: ", instructions)
  
  const expectedOutputs = ['1 3 N', '5 1 E'];
  let roverIndex = 0;

  for (let i = 1; i < instructions.length; i = i + 2) {
    const startPosition = instructions[i].split(' ');
    const startX = parseInt(startPosition[0]);
    const startY = parseInt(startPosition[1]);
    const startDirection = startPosition[2];

    const myRover = new Rover(startX, startY, startDirection);
    const movements = instructions[i + 1].split('');

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
    expect(myRover.getPosition()).toBe(expectedOutputs[roverIndex]);
    roverIndex++;
  }
});