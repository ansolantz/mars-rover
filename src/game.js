
class Game {

  constructor(canvas, cordDisplayDiv, turnLeftButton, turnRightButton, moveForwardButton) {
    console.log('Creating Game');

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas = canvas;

    this.reset = false;
    this.cordDisplayDiv = cordDisplayDiv;
    this.turnLeftButton = turnLeftButton;
    this.turnRightButton = turnRightButton;
    this.moveForwardButton = moveForwardButton;

    this.plateau = new Grid(5, 5);
    this.rover = new Rover(0, 0, 'N', this.plateau);

    document.onkeydown = (event) => {
      switch (event.keyCode) {
        case 37:
          this.rover.turnLeft();
          break;
        case 38:
          this.rover.moveForward();
          break;
        case 39:
          this.rover.turnRight();
          break;
        case 40:
          this.rover.moveForward();
          break;
      }
    };

    this.turnLeftButton.addEventListener('click', () => this.rover.turnLeft());
    this.turnRightButton.addEventListener('click', () => this.rover.turnRight());
    this.moveForwardButton.addEventListener('click', () =>  this.rover.moveForward());
  }


  startLoop() {
    const loop = () => {
      this.clearCanvas();
      this.drawCanvas();

      if (this.reset === false) {
        window.requestAnimationFrame(loop);
      }
    }

    window.requestAnimationFrame(loop);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawCanvas() {
    this.drawRover()
    this.cordDisplayDiv.innerHTML = `X: ${this.rover.x} &nbsp; Y: ${this.rover.y} <br> Direction: ${this.rover.direction} `
  }

  drawRover() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgb(255, 189, 16)";

    const xCanvas = this.rover.x * 50
    const yCanvas = 5 * 50 - this.rover.y * 50

    this.ctx.fillRect(xCanvas, yCanvas, 50, 50)
    this.ctx.fillStyle = "rgb(150, 170, 44)";
    this.ctx.closePath();

    let leftEyeX = 0;
    let leftEyeY = 0;
    let rightEyeX = 0;
    let rightEyeY = 0;

    let innerLeftEyeX = 0;
    let innerLeftEyeY = 0;
    let innerRightEyeX = 0;
    let innerRightEyeY = 0;

    if (this.rover.getDirection() === 'W') {
      leftEyeX = xCanvas + 10;
      leftEyeY = yCanvas + 15;
      rightEyeX = xCanvas + 10;
      rightEyeY = yCanvas + 35;

      innerLeftEyeX =  leftEyeX - 3;
      innerLeftEyeY = leftEyeY - 8;
      innerRightEyeX = rightEyeX - 3;
      innerRightEyeY = rightEyeY -8;

    } else if (this.rover.getDirection() === 'E') {
      leftEyeX = xCanvas + 40;
      leftEyeY = yCanvas + 15;
      rightEyeX = xCanvas + 40;
      rightEyeY = yCanvas + 35;

      innerLeftEyeX =  leftEyeX + 4;
      innerLeftEyeY = leftEyeY - 8;
      innerRightEyeX = rightEyeX + 4;
      innerRightEyeY = rightEyeY -8;
  
    } else if (this.rover.getDirection() === 'N') {
      leftEyeX = xCanvas + 15;
      leftEyeY = yCanvas + 10;
      rightEyeX = xCanvas + 35;
      rightEyeY = yCanvas + 10;

      innerLeftEyeX =  leftEyeX ;
      innerLeftEyeY = leftEyeY - 11;
      innerRightEyeX = rightEyeX;
      innerRightEyeY = rightEyeY - 11;
    } else if (this.rover.getDirection() === 'S') {
      leftEyeX = xCanvas + 15;
      leftEyeY = yCanvas + 40;
      rightEyeX = xCanvas + 35;
      rightEyeY = yCanvas + 40;

      innerLeftEyeX = leftEyeX;
      innerLeftEyeY = leftEyeY - 4;
      innerRightEyeX = rightEyeX;
      innerRightEyeY = rightEyeY -4; 
    }

    // Drawing eyes's -------------
    this.ctx.beginPath();
    this.ctx.arc(leftEyeX, leftEyeY, 6, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(rightEyeX, rightEyeY, 6, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.fill();
    this.ctx.closePath();

    //--Inner eye's ----------------------
    this.ctx.beginPath();
    this.ctx.arc(innerLeftEyeX , innerLeftEyeY + 8, 3, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgb(0, 0, 0)";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(innerRightEyeX, innerRightEyeY + 8, 3, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgb(0, 0, 0)";
    this.ctx.fill();
    this.ctx.closePath();
    //------------------
  }
}
