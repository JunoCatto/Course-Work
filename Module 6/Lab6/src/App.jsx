import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../calculator/calculator.css";

const keys = [
  "AC",
  "DEL",
  "%",
  "/",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const operators = ["%", "/", "×", "−", "+"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [previous, setPrevious] = useState("");

  function compute({ a, b, op }) {
    let result;
    switch (op) {
      case "+":
        result = +a + +b;
    }
    setDisplay(result.toString());
  }

  const handleClick = (key) => {
    if (key === "AC") {
      setDisplay("");
      setOperator("");
      setPrevious("");
      return;
    }
    if (key === "DEL") {
      setDisplay(display.slice(0, -1));
    }
    if (key === "=") {
      compute({ a: previous, b: display, op: operator });
      return;
    }
    if (numbers.includes(key)) {
      setDisplay((previous) => previous + key);
    }
    if (operators.includes(key)) {
      setPrevious(display);
      setDisplay("");
      setOperator(key);
    }
  };

  const getClass = (key) => {
    if (key === 0) {
      return "key wide";
    }
    if (key === "=") {
      return "key equal";
    }
    if (operators.includes(key)) {
      return "key op";
    }
    return "key";
  };

  return (
    <>
      <div className="calculator">
        <input
          id="display"
          className="display"
          type="text"
          value={display}
          readonly
        />
        <div className="keys">
          {keys.map((key) => (
            <button
              onClick={() => handleClick(key)}
              key={key}
              className={getClass(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
