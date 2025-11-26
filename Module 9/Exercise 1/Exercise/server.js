import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };


import { add, subtract, multiply, divide } from "./controller.js";


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hosting calculator");
});

app.get("/add", add);
app.get("/subtract", subtract);
app.get("/multiply", multiply);
app.get("/divide", divide);

// Exercise 1

// let ports = [1000, 2000, 3000, 4000, 5000];
// ports.forEach((port) => {
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
