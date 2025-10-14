import { describe, it, expect } from "vitest";
import { greet } from "./exercise4.js";
import { plus, minus, multiply, divide } from "./exercise4.js";
describe("Testing functions from exercise 4", () => {
  it("greet function returns correct greeting", () => {
    expect(greet("Alice")).toBe("Hello Alice!");
    expect(greet("Bob")).toBe("Hello Bob!");
    expect(greet("")).toBe("Hello !");
  });
  it("plus function adds two numbers", () => {
    expect(plus(2, 3)).toBe(5);
    expect(plus(-1, 1)).toBe(0);
    expect(plus(0, 0)).toBe(0);
  });
  it("minus function subtracts two numbers", () => {
    expect(minus(5, 3)).toBe(2);
    expect(minus(0, 1)).toBe(-1);
    expect(minus(10, 10)).toBe(0);
  });
  it("multiply function multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(0, 10)).toBe(0);
  });
  it("divide function divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-4, 2)).toBe(-2);
    expect(divide(10, 0)).toBe(Infinity); // Division by zero case
  });
});
