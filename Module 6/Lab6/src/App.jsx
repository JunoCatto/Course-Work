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

function App() {
  const [count, setCount] = useState(0);
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
          value="0"
          readonly
        />
        <div className="keys">
          {keys.map((key) => (
            <button className={getClass(key)}>{key}</button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
