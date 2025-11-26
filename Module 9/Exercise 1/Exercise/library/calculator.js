import { Logger } from "./logger.js";

export class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.id = Math.floor(Math.random() * 1000);
    this.logger = new Logger(this.id);
  }

  addLogic() {
    this.logger.log(`Adding ${this.a} and ${this.b}`);
    return this.a + this.b;
  }

  subtractLogic() {
    this.logger.log(`Subtracting ${this.b} from ${this.a}`);
    return this.a - this.b;
  }

  multiplyLogic() {
    this.logger.log(`Multiplying ${this.a} and ${this.b}`);
    return this.a * this.b;
  }

  divideLogic() {
    this.logger.log(`Dividing ${this.a} by ${this.b}`);
    if (this.b === 0) return "Cannot divide by zero";
    return this.a / this.b;
  }
}
