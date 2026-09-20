
import Mobile from './mobile';
import starshipImg from './assets/images/vaisseau-ballon-petit.png';

/**
 * StarShip class inherits from Mobile and adds movement functionality
 */
export default class StarShip extends Mobile {

  /**
   * initializes the StarShip object
   * @param {number} x - x position
   * @param {number} y - y position
   */
  constructor(x, y) {
    super(x, y, starshipImg, 0, 8); // call parent constructor
    this.moving = null;  // track movement direction
  }
   
  /**
   * checks if the ship is moving up
   * @returns {boolean} - true if moving up
   */
  get up() {
    return this.moving === 'up';
  }

  /**
   * checks if the ship is moving down
   * @returns {boolean} - true if moving down
   */
  get down() {
    return this.moving === 'down';
  }
  
  /**
   * set the movement direction to up
   */
  moveUp() {
    this.moving = 'up';
  }
  
  /**
   * set the movement direction to down
   */
  moveDown() {
    this.moving = 'down';
  }
  
   /**
   * stop the movement
   */
  stopMoving() {
    this.moving = null; 
  }
  
  /**
   * move the starship based on direction
   * @param {HTMLCanvasElement} canvas - the canvas element
   */
  move(canvas) {
    if (this.up && this.y > 0) {
      this.y -= this.deltaY;
    }
    if (this.down && this.y < canvas.height - this.image.height) {
      this.y += this.deltaY;
    }
  }
}

