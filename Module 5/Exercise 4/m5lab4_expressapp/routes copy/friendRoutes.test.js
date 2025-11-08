import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../index";

describe("GET /friends", () => {
  it("Get all friends", async () => {
    const res = await request(app).get("/friends");
    expect(res.status).toBe(200);
  });
});

describe("GET /friends/filter", () => {
  it("Get all friends with matching gender", async () => {
    const res = await request(app).get("/friends/filter?gender=male");
    expect(res.status).toBe(200);
    expect(res.body.count).toBe(3);
  });

  it("Get all friends with matching age", async () => {
    const res = await request(app).get("/friends/filter?age=26");
    expect(res.status).toBe(200);
    expect(res.body.records.length).toBe(3);
  });

  it("Get all friends with matching letter", async () => {
    const res = await request(app).get("/friends/filter?letter=P");
    expect(res.status).toBe(200);
    expect(res.body.records.length).toBe(1);
  });
});
