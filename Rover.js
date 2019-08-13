class Rover {


  constructor(currentX, currentY) {

    console.log('Creating a new Rover');
    this.x = currentX;
    this.y = currentY;

    this.direction = 'N';

  }


  turnLeft() {
    console.log('turning left');
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
    console.log('New direction ' + this.direction);

  }

  turnRight() {
    console.log('turning right')
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

    console.log('New direction ' + this.direction);

  }

  moveForward() {
    console.log('Moving forward')
    console.log('Direction: ' + this.direction)

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

    console.log('New position: ' + 'x:' + this.x + ', y:' + this.y)

  }

}


module.exports = Rover;
