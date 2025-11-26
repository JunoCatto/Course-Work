import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./server.js";

const testCases = [
  [1, 2],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
];

describe("GET /add", () => {
  for (const [a, b] of testCases) {
    it(`adds ${a} and ${b}`, async () => {
      const res = await request(app).get("/add").query({ a, b });
      expect(res.status).toBe(200);
      expect(res.text).toBe(`${a} + ${b} = ${a + b}`);
    });
  }
});

describe("GET /subtract", () => {
  for (const [a, b] of testCases) {
    it(`subtracts ${b} from ${a}`, async () => {
      const res = await request(app).get("/subtract").query({ a, b });
      expect(res.status).toBe(200);
      expect(res.text).toBe(`${a} - ${b} = ${a - b}`);
    });
  }
});

describe("GET /multiply", () => {
  for (const [a, b] of testCases) {
    it(`multiplies ${a} and ${b}`, async () => {
      const res = await request(app).get("/multiply").query({ a, b });
      expect(res.status).toBe(200);
      expect(res.text).toBe(`${a} * ${b} = ${a * b}`);
    });
  }
});

describe("GET /divide", () => {
  for (const [a, b] of testCases) {
    it(`divides ${a} by ${b}`, async () => {
      const res = await request(app).get("/divide").query({ a, b });
      expect(res.status).toBe(200);
      expect(res.text).toBe(`${a} / ${b} = ${a / b}`);
    });
  }
});
