import Ball from './ball';

/* TYPE Animation */
export default class Animation {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.balls = [];  
    this.running = false;
    this.req = null;
  }

  alea(n) {
    return Math.floor(Math.random() * n);
  }

  addBall() {
    const x = this.alea(this.canvas.width);
    const y = this.alea(this.canvas.height);
    const deltaX = this.alea(11) - 5; 
    const deltaY = this.alea(11) - 5; 
    if (deltaX === 0 && deltaY === 0) {
      return;  
    }
    const ball = new Ball(x, y, deltaX, deltaY);
    this.balls.push(ball);
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => {
      ball.move(this.canvas); 
      ball.draw(this.context); 
    });
    this.req = window.requestAnimationFrame(this.animate.bind(this));
  }

  startAndStop() {
    if (this.running) {
      window.cancelAnimationFrame(this.req);
      this.running = false;
    } else {
      this.running = true;
      this.req = window.requestAnimationFrame(this.animate.bind(this));
    }
  }

}

