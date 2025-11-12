import { useState } from "react";

export const CountButton = ({ display, click }) => {
  return <button onClick={() => click()}>{display}</button>;
};

export default CountButton;
