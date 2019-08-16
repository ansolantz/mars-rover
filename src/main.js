
console.log('main');
// document.addEventListener("DOMContentLoaded", function (event) {
//   main();
// });


function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function buildScreen() {  //Building screen
    // console.log('you are on the game screen')

    const gameScreen = buildDom(`
      <div id="cordDisplay"></div>
      <section class="plateau">
      <canvas></canvas>
      </section>

      
      `);

    const gameContainerElement = document.querySelector('.plateau');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const cordDisplayDiv = document.querySelector('#cordDisplay');

    const game = new Game(canvasElement, cordDisplayDiv);

    game.startLoop();
  }

  buildScreen();
}

window.addEventListener('load', main);

