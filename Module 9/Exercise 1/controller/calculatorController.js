import { Calculator } from "../library/calculator.js";

export const add = (req, res) => {
  const a = Number(req.query.a); // read from query
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    // optional validation
    return res.status(400).send("Invalid numbers");
  }

  const cal = new Calculator(a, b);
  const result = cal.addLogic();
  res.send(`${a} + ${b} = ${result}`);
  console.log("Addition result:", result);
};

export const subtract = (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) return res.status(400).send("Invalid numbers");

  const cal = new Calculator(a, b);
  const result = cal.subtractLogic();
  res.send(`${a} - ${b} = ${result}`);
  console.log("Subtraction result:", result);
};

export const multiply = (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) return res.status(400).send("Invalid numbers");

  const cal = new Calculator(a, b);
  const result = cal.multiplyLogic();
  res.send(`${a} * ${b} = ${result}`);
  console.log("Multiplication result:", result);
};

export const divide = (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) return res.status(400).send("Invalid numbers");
  if (b === 0) return res.status(400).send("Cannot divide by zero"); // safety

  const cal = new Calculator(a, b);
  const result = cal.divideLogic();
  res.send(`${a} / ${b} = ${result}`);
  console.log("Division result:", result);
};
