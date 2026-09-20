/**
 * key manager class to handle up and down key states
 */
export default class KeyManager {
  /**
   * creates an instance of key manager
   */
  constructor() {
    this.up = false;
    this.down = false;
  }

  /**
   * sets the up key state to true
   */
  upPressed() {
    this.up = true;
  }

  /**
   * sets the up key state to false
   */
  upReleased() {
    this.up = false;
  }

  /**
   * sets the down key state to true
   */
  downPressed() {
    this.down = true;
  }

  /**
   * sets the down key state to false
   */
  downReleased() {
    this.down = false;
  }
}
 