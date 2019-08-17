
function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function buildScreen() {

    const gameScreen = buildDom(`
     <div id="cordDisplay"></div>
      <section class="plateau">
        <canvas></canvas>
      </section>
      <div>
        <input type="button" id="moveForwardButton" class="button" value="Move &nbsp; Forward">
      </div>
      <div>
        <input type="button" id="turnLeftButton" class="button" value="&#9668; Turn &nbsp; Left">
        <input type="button" id="turnRightButton" class="button" value="Turn &nbsp; Right &#9658;">
      </div>
     
      `);

    const gameContainerElement = document.querySelector('.plateau');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const cordDisplayDiv = document.querySelector('#cordDisplay');
    const turnLeftButton = document.querySelector('#turnLeftButton');
    const turnRightButton = document.querySelector('#turnRightButton');
    const moveForwardButton = document.querySelector('#moveForwardButton');
    
    const game = new Game(canvasElement, cordDisplayDiv, turnLeftButton, turnRightButton, moveForwardButton);

    game.startLoop();
  }

  buildScreen();
}

window.addEventListener('load', main);

