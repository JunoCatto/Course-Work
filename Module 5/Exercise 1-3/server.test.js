import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./server.js";

describe("GET /add", () => {
  it("adds two numbers from query params", async () => {
    const res = await request(app).get("/add").query({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe("2 + 3 = 5");
  });
});
