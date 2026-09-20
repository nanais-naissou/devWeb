import Mobile from './mobile';
import shootImg from './assets/images/tir.png';

/**
 * represents a shoot object that extends the mobile class
 * @class
 * @extends Mobile
 */
export default class Shoot extends Mobile {
  /**
   * creates an instance of Shoot
   * @param {number} x - the x-coordinate of the shoot
   * @param {number} y - the y-coordinate of the shoot
   */
  constructor(x, y) {
    super(x, y, shootImg, 8, 0);
  }

  /**
   * checks if the shoot collides with another mobile object
   * @param {Mobile} mobile - the mobile object to check collision with
   * @returns {boolean} true if there is a collision, false otherwise
   */
  collisionWith(mobile) {
    const p1x = Math.max(this.x, mobile.x);
    const p1y = Math.max(this.y, mobile.y);
    const p2x = Math.min(this.x + this.image.width, mobile.x + mobile.image.width);
    const p2y = Math.min(this.y + this.image.height, mobile.y + mobile.image.height);
    return p1x < p2x && p1y < p2y;
  }

  /**
   * finds the first saucer that collides with the shoot
   * @param {Array<Mobile>} saucers - the array of saucer objects to check for collision
   * @returns {Mobile|undefined} the first saucer that collides with the shoot, or undefined if no collision is found
   */
  findCollision(saucers) {
    return saucers.find(saucer => !saucer.isFalling() && this.collisionWith(saucer));
  }
}




 

