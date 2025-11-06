import {
  addLogic,
  subtractLogic,
  multiplyLogic,
  divideLogic,
} from "./library/calculator.js";

export const add = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(`${a} + ${b} = ${addLogic(a, b)}`);
  console.log("Addition result:", addLogic(a, b));
};

export const subtract = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(`${a} - ${b} = ${subtractLogic(a, b)}`);
  console.log("Subtraction result:", subtractLogic(a, b));
};

export const multiply = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(`${a} * ${b} = ${multiplyLogic(a, b)}`);
  console.log("Multiplication result:", multiplyLogic(a, b));
};

export const divide = (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(`${a} / ${b} = ${divideLogic(a, b)}`);
  console.log("Division result:", divideLogic(a, b));
};
