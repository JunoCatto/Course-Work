import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" with { type: "json" };


import { add, subtract, multiply, divide } from "../controller/calculatorController.js";

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());


// Calculator
app.get("/", (req, res) => {
  res.send("Hosting calculator");
});

// Calculator routes
import calculatorRoutes from "../routes/calculatorRoutes.js";
app.use("/", calculatorRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
