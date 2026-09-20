import Game from './game.js';

// initializes the game by setting up the canvas and event listeners
// binds the game object to the event handlers
// adds click event listeners to the buttons for adding saucers and fleets of saucers

const init = () => {
   // get the canvas element
   const canvas = document.getElementById("stars"); 
   // create a new game instance
   const game = new Game(canvas);
   // start the game
   game.start();  

   // add event listeners for keydown and keyup
   window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
   window.addEventListener('keyup', game.keyUpActionHandler.bind(game));

   // get the button for adding a new saucer
   const boutonNouvelleSoucoupe = document.getElementById("nouvelleSoucoupe");
   // add click event listener to the button for adding a new saucer
   boutonNouvelleSoucoupe.addEventListener("click", game.addSaucer.bind(game));

   // get the button for adding a fleet of saucers
   const boutonFlotteSoucoupe = document.getElementById("flotteSoucoupes");
   // add click event listener to the button for adding a fleet of saucers
   boutonFlotteSoucoupe.addEventListener("click", game.addFlotteSaucer.bind(game));
};

window.addEventListener("DOMContentLoaded", init);

console.log('Le bundle a été généré');
