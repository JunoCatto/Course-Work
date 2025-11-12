class Calculator {
  constructor() {
    this.current = "0";
    this.previous = null;
    this.operator = null;
    this.justEvaluated = false;
  }

  getDisplay() {
    return this.current;
  }

  inputDigit(d) {
    console.log("inputDigit", d, this.operator, this.current);
    if (this.justEvaluated) {
      this.current = d;
      this.justEvaluated = false;
      return;
    }
    if (this.current === "0") this.current = d;
    else this.current += d;
  }

  inputDot() {
    if (this.justEvaluated) {
      this.current = "0.";
      this.justEvaluated = false;
      return;
    }
    if (!this.current.includes(".")) {
      this.current += ".";
    }
  }

  clearAll() {
    this.current = "0";
    this.previous = null;
    this.operator = null;
    this.justEvaluated = false;
  }

  // implement deleteOne
  deleteOne() {}

  setOperator(op) {
    if (this.operator && !this.justEvaluated) {
      // chain operation
      this.evaluate();
    }
    this.previous = parseFloat(this.current);
    this.operator = op;
    this.justEvaluated = false;
    this.current = "0";
  }

  evaluate() {
    if (this.operator === null || this.previous === null) return;
    const a = this.previous;
    const b = parseFloat(this.current);
    let result;
    switch (this.operator) {
      case "+":
        result = a + b;
        break;
      case "/":
        result = a / b;
        break;
      case "%":
        result = a % b;
        break;
      default:
        return;
    }
    this.current = String(result);
    this.operator = null;
    this.previous = null;
    this.justEvaluated = true;
  }
}

(function () {
  const display = document.getElementById("display");
  const keysContainer = document.querySelector(".keys");
  if (!display || !keysContainer) {
    throw new Error("Missing calculator elements");
  }

  const calc = new Calculator();

  function render() {
    display.value = calc.getDisplay();
  }

  keysContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.getAttribute("data-value");
    const action = btn.getAttribute("data-action");

    if (action === "clear") {
      calc.clearAll();
      return render();
    }
    if (action === "delete") {
      calc.deleteOne();
      return render();
    }
    if (action === "equals") {
      calc.evaluate();
      return render();
    }

    if (value === ".") {
      calc.inputDot();
      return render();
    }
    if (["+", "-", "*", "/", "%"].includes(value)) {
      calc.setOperator(value);
      return render();
    }
    calc.inputDigit(value);
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") calc.inputDigit(e.key);
    else if (e.key === ".") calc.inputDot();
    else if (["+", "-", "*", "/", "%"].includes(e.key)) calc.setOperator(e.key);
    else if (e.key === "Enter" || e.key === "=") calc.evaluate();
    else if (e.key === "Backspace") calc.deleteOne();
    else if (e.key.toLowerCase() === "c") calc.clearAll();
    else return;
    render();
  });

  render();
})();
