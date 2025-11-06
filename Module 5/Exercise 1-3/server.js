import express from "express";
const app = express();
const port = 3000;
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(a + b);
  console.log("Addition result:", a + b);
});

// Exercise 2

app.get("/subtract", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(a - b);
  console.log("Subtraction result:", a - b);
});

app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(a * b);
  console.log("Multiplication result:", a * b);
});

app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.send(a / b);
  console.log("Division result:", a / b);
});

// Exercise 1

let ports = [1000, 2000, 3000, 4000, 5000];
ports.forEach((port) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
