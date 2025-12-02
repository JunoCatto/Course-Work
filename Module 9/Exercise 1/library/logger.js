export class Logger {
  constructor(id) {
    this.id = id;
  }
  log(...args) {
    console.log(`[Calculator ${this.id}]`, ...args);
  }
}
