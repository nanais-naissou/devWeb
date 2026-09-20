import Mobile from './mobile';
import saucerImg from './assets/images/flyingSaucer-petit.png';

/**
 * class representing a saucer
 * @extends Mobile
 */
export default class Saucer extends Mobile {

  /**
   * create a saucer
   * @param {number} x - the x-coordinate of the saucer
   * @param {number} y - the y-coordinate of the saucer
   */
  constructor(x, y) {
    super(x, y, saucerImg, -3, 0);
    this.falling = false;
  }

  /**
   * move the saucer
   * @param {Object} game - the game instance
   */
  move(game) {
    this.x += this.deltaX;
    this.y += this.deltaY;
    if (this.x + this.image.width < 0) {
      game.removeSaucer(this); 
      game.score -= 1000;
      game.updateScore();
    }
    if (this.falling && this.y >= game.canvas.height - this.image.height) {
      game.removeSaucer(this); 
    }
  }

  /**
   * check if the saucer is falling
   * @returns {boolean} true if the saucer is falling, false otherwise
   */
  isFalling(){
    return this.falling;
  }
  
  /**
   * make the saucer fall
   */
  fall() {
    this.falling = true;
    this.deltaX = 0;
    this.deltaY = 3; 
  }

}


