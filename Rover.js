class Rover {

  constructor(startX, startY, startDirection) {
    // console.log('Creating a new Rover');
    this.x = startX;
    this.y = startY;
    this.direction = startDirection;
    this.directionName = this.getDirectionName();
  }

  getDirection() {
    return this.direction;
  }

  getDirectionName() {

    if (this.direction === 'N') {
      this.directionName = 'North';
    } else if (this.direction === 'S') {
      this.directionName = 'South';
    }
    else if (this.direction === 'E') {
      this.directionName = 'East';
    }
    else if (this.direction === 'W') {
      this.directionName = 'West';
    }
    return this.directionName;
  }

  turnLeft() {
    console.log('Turning left');
    console.log('Old direction: ' + this.direction);

    if (this.direction === 'N') {
      this.direction = 'W';
    } else if (this.direction === 'S') {
      this.direction = 'E';
    }
    else if (this.direction === 'W') {
      this.direction = 'S';
    }
    else if (this.direction === 'E') {
      this.direction = 'N';
    } else {
      console.log('No valid direction!');
    }
    console.log('New direction is ' + this.direction);

  }

  turnRight() {
    console.log('Turning right')
    if (this.direction === 'N') {
      this.direction = 'E';
    } else if (this.direction === 'S') {
      this.direction = 'W';
    }
    else if (this.direction === 'W') {
      this.direction = 'N';
    }
    else if (this.direction === 'E') {
      this.direction = 'S';
    } else {
      console.log('No valid direction!');
    }
    console.log('New direction is ' + this.direction);


  }

  moveForward() {
    console.log('Moving forward')
    console.log('Direction: ' + this.getDirectionName())

    if (this.direction === 'N') {
      this.y = this.y + 1
    } else if (this.direction === 'S') {
      this.y = this.y - 1
    } else if (this.direction === 'W') {
      this.x = this.x - 1
    } else if (this.direction === 'E') {
      this.x = this.x + 1
    } else {
      console.log('Not a valid move!');
    }

    console.log('New position: ' + 'x:' + this.x + ' y:' + this.y + ' ' + this.direction)
 

  }

  getPosition() {
    return this.x + ' ' + this.y + ' ' + this.direction
  }

}



module.exports = Rover;
