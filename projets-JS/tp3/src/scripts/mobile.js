/**
 * mobile class for drawing and moving the mobile object
 */
export default class Mobile {
  /**
   * initializes the mobile object
   * @param {number} x - x position
   * @param {number} y - y position
   * @param {string} imageSrc - image source
   * @param {number} [deltaX=0] - horizontal speed
   * @param {number} [deltaY=0] - vertical speed
   */
  constructor(x, y, imageSrc, deltaX = 0, deltaY = 0) {
    this.x = x // x position
    this.y = y // y position
    this.image = new Image() // create image
    this.image.src = imageSrc // set image source
    this.deltaX = deltaX // horizontal speed
    this.deltaY = deltaY // vertical speed
  }

  /**
   * draws the mobile on the canvas
   * @param {CanvasRenderingContext2D} context - canvas context
   */
  draw(context) {
    context.drawImage(this.image, this.x, this.y) // draw image
  }

  /**
   * moves the mobile by deltaX and deltaY
   */
  move() {
    this.x += this.deltaX // move x position
    this.y += this.deltaY // move y position
  }
}
