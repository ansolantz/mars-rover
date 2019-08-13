const Rover = require('../rover');

test('Turn left', () => {
  let myRover = new Rover(0, 0, 'N');
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