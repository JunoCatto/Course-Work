import { useState } from "react";

export const CountButton = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default CountButton;
