
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

  static BALL_WIDTH = 48;
  static BALL_HEIGHT = 48;

  constructor(x, y, deltaX = +3, deltaY = -2) {
    this.image = this.#createImage(ballImgSrc);
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;

  }

  move(canvas) {
    if (this.x + this.deltaX < 0 ||this.x +this.deltaX + Ball.BALL_WIDTH > canvas.width) {
      this.deltaX = -this.deltaX;
    }
    if (this.y + this.deltaY < 0 ||this.y + this.deltaY + Ball.BALL_HEIGHT > canvas.height) {
      this.deltaY = -this.deltaY;
    }
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    // alert('vous devez coder la méthode draw() de Ball');
    context.drawImage(this.image, this.x, this.y);
  }


  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

  collisionWith(obstacle) {
    const p1x = Math.max(this.x, obstacle.x);
    const p1y = Math.max(this.y, obstacle.y);
    const p2x = Math.min(this.x + this.width, obstacle.x + obstacle.width);
    const p2y = Math.min(this.y + this.height, obstacle.y + obstacle.height);
    return p1x < p2x && p1y < p2y;
  }
}
 