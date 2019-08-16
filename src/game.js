
class Game {

  constructor(canvas, cordDisplayDiv) {
    console.log('Creating Game');

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas = canvas;

    this.reset = false;
    this.cordDisplayDiv = cordDisplayDiv ;

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
    console.log('Update canvas')


  }


  drawCanvas() {

    console.log('draw canvas')

    //Draw canvas here

    this.cordDisplayDiv.innerHTML = `X: ${this.rover.x} Y: ${this.rover.y}`
  }


}
