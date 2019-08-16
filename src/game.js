
class Game {

  constructor(canvas, cordDisplayDiv) {
    console.log('Creating Game');

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas = canvas;

    this.reset = false;
    this.cordDisplayDiv = cordDisplayDiv;

    this.plateau = new Grid(5, 5);
    this.rover = new Rover(0, 0, 'N', this.plateau);


    document.onkeydown = (event) => {
      switch (event.keyCode) {
        case 37:
          console.log('left');
          this.rover.turnLeft();
          break;
        case 38:
          console.log('move');
          this.rover.moveForward();
          break;
        case 39:
          console.log('right');
          this.rover.turnRight();
          break;
        case 40:
          console.log('----');
          this.rover.moveForward();
          break;
      }
    };
  }


  startLoop() {

    const loop = () => {

      this.updateCanvas();
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

  updateCanvas() {
    //console.log('Update canvas')


  }


  drawCanvas() {

    //console.log('draw canvas')

    this.drawRover()

    this.cordDisplayDiv.innerHTML = `X: ${this.rover.x} Y: ${this.rover.y} <br> Direction: ${this.rover.direction} `
  }

  drawRover() {






    // ctx.arc(x, y, radius, startAngle, endAngle)
    //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgb(255, 189, 16)";


    //this.ctx.fillRect(0, 450, 50, 50);


    const xCanvas = this.rover.x * 50
    const yCanvas = 5 * 50 - this.rover.y * 50

    // let img = document.getElementById("wall-e");

    // if(this.rover.getDirection() === 'W'){
    //   img = document.getElementById("wall-e-left");
    // }else if(this.rover.getDirection() === 'E'){
    //   img = document.getElementById("wall-e-right");
    // }
    // else {
    //   img = document.getElementById("wall-e");
    // }

    // this.ctx.drawImage(img, xCanvas, yCanvas, 50, 50);


    this.ctx.fillRect(xCanvas, yCanvas, 50, 50)

    this.ctx.fillStyle = "rgb(250, 170, 44)";
    this.ctx.closePath();

    this.ctx.strokeRect(xCanvas, yCanvas, 50, 50)
    this.ctx.fill();
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


    // this.ctx.beginPath();
    // this.ctx.arc(this.rover.x, this.rover.y, 20, 0, 2 * Math.PI);
    // this.ctx.fillStyle = '#ff3344';
    // this.ctx.fill();
    // this.ctx.closePath();
  }


}
