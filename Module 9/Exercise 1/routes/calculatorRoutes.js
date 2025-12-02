import express from "express";
import {
  add,
  subtract,
  multiply,
  divide,
} from "./controller/calculatorController.js";

const router = express.Router();

router.get("/add", add);
router.get("/subtract", subtract);
router.get("/multiply", multiply);
router.get("/divide", divide);

export default router;
