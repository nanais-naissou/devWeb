import StarShip from './StarShip.js';
import KeyManager from './keyManager.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';


/**
 * represents a game
 * @class
 */
export default class Game {
  /**
   * creates an instance of game
   * @param {HTMLCanvasElement} canvas - the canvas element
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.starship = new StarShip(40, this.canvas.height / 2);  
    this.saucers = [];
    this.req = null;
    this.keyManager = new KeyManager();
    this.shoots = [];
    this.score = 0;
    this.flotteSaucerInterval = null;
  }

  /**
   * animates the game
   */
  /**
   * animates the game by updating the positions and states of all game objects,
   * checking for collisions, and rendering the updated game state to the canvas
   */
  animate() {
    // clear the entire canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 

    // move the starship based on key inputs
    if (this.keyManager.up) {
      this.starship.moveUp();
    } else if (this.keyManager.down) {
      this.starship.moveDown();
    } else { 
      this.starship.stopMoving();
    }

    // update the positions of the shoots and check for collisions with saucers
    this.shoots = this.shoots.filter(shoot => { 
      const saucerHit = shoot.findCollision(this.saucers);
      if (saucerHit) {
        saucerHit.fall(); // make the saucer fall if hit
        this.score += 200; // increase the score
        this.updateScore(); // update the score display
        return false; // remove the shoot after collision
      }
      return shoot.x < this.canvas.width; // keep the shoot if it's still within the canvas
    });

    // move and draw each shoot
    this.shoots.forEach(shoot => {
      shoot.move();
      shoot.draw(this.context);
    });

    // move and draw each saucer
    this.saucers.forEach(saucer => {
      saucer.move(this);
      saucer.draw(this.context);
    });

    // move and draw the starship
    this.starship.move(this.canvas); 
    this.starship.draw(this.context); 

    // request the next animation frame
    this.req = window.requestAnimationFrame(this.animate.bind(this)); 
  }

  /**
   * starts the game animation
   */
  start() {
    this.animate();
  }

  /**
   * stops the game animation
   */
  stop() {
    window.cancelAnimationFrame(this.req); 
  } 
  
  /**
   * adds a fleet of saucers at intervals
   */
  addFlotteSaucer() {
    if (this.flotteSaucerInterval) {
      clearInterval(this.flotteSaucerInterval);
      this.flotteSaucerInterval = null;
    } else {
      this.flotteSaucerInterval = setInterval(() => {
        const y = Math.random() * (this.canvas.height - 50); 
        const saucer = new Saucer(this.canvas.width, y);  
        this.saucers.push(saucer);
      }, 750); 
    }
  }

  /**
   * adds a single saucer
   */
  addSaucer() {
    const y = Math.random() * (this.canvas.height - 50); 
    const saucer = new Saucer(this.canvas.width, y);  
    this.saucers.push(saucer);
  }

  /**
   * removes a saucer from the game
   * @param {Saucer} saucer - the saucer to remove
   */
  removeSaucer(saucer) {
    this.saucers = this.saucers.filter(s => s !== saucer);
  }

  /**
   * fires a shoot from the starship
   */
  fire() {
    const shoot = new Shoot(this.starship.x + this.starship.image.width, this.starship.y + this.starship.image.height / 2);
    this.shoots.push(shoot);
  }

  /**
   * updates the score display
   */
  updateScore() {
    document.getElementById("score").textContent = this.score;
  }

  /**
   * handles key down actions
   * @param {KeyboardEvent} event - the keyboard event
   */
  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upPressed();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downPressed();
        break;
      case " ":
        this.fire();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  /**
   * handles key up actions
   * @param {KeyboardEvent} event - the keyboard event
   */
  keyUpActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upReleased();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downReleased();
        break;
      default: return;
    }
    event.preventDefault();
  }
}

