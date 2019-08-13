
const Rover = require('./Rover');
const Grid = require('./Grid');


let plateau = new Grid();
let rover1 = new Rover(0, 0);


rover1.turnRight();
rover1.moveForward();
rover1.turnLeft();
rover1.moveForward();
rover1.moveForward();
rover1.turnRight();
rover1.moveForward();
rover1.moveForward();


