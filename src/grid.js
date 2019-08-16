class Grid {

  constructor(xSize, ySize) {
    //console.log('Creating a new Grid class');

    this.xSize = xSize;
    this.ySize = ySize;
  }

  isMovePossible(roverX, roverY, direction){
    if(direction === 'N' && roverY === this.ySize){
      return false;
    } else if(direction === 'S' && roverY === 0){
      return false;
    } else if(direction === 'E' && roverX === this.ySize){
      return false;
    } else if(direction === 'W' && roverX === 0){
      return false;
    } else {
      return true;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Grid;
}
