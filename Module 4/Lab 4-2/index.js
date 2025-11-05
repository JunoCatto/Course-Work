// (1+2)*1
// return 3
// assumes only 2 numbers

function cal(input) {
  let result;
  // remove space
  const INVALID = "Invalid";
  const noSpace = input.replace(/\s/g, "");
  const operators = ["+", "-", "*", "/"];
  const f = (operator) => {
    return noSpace.includes(operator);
  };

  // find operator
  const operator = operators.find(f);
  if (!operator) return INVALID;

  const expressionArray = noSpace.split(operator);

  if (expressionArray.length !== 2) return INVALID;
  switch (operator) {
    case "+":
      result = parseInt(expressionArray[0]) + parseInt(expressionArray[1]);
      break;
    case "-":
      result = parseInt(expressionArray[0]) - parseInt(expressionArray[1]);
      break;
    case "*":
      result = parseInt(expressionArray[0]) * parseInt(expressionArray[1]);
      break;
    case "/":
      result = parseInt(expressionArray[0]) / parseInt(expressionArray[1]);
      break;
  }
  return result;
}

document.getElementById("button").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const result = cal(input);
  document.querySelector(".result").innerText = result;
});
