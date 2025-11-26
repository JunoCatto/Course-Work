// (1+2)*1
// return 3
// assumes only 2 numbers

async function cal(input) {
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
  let NUM1 = expressionArray[0],
    NUM2 = expressionArray[1],
    response;

  switch (operator) {
    case "+":
      response = await fetch(`http://localhost:3000/add?a=${NUM1}&b=${NUM2}`);
      result = await response.json();
      break;
    case "-":
      response = await fetch(
        `http://localhost:3000/subtract?a=${NUM1}&b=${NUM2}`
      );
      result = await response.json();
      break;
    case "*":
      response = await fetch(
        `http://localhost:3000/multiply?a=${NUM1}&b=${NUM2}`
      );
      result = await response.json();
      break;
    case "/":
      response = await fetch(
        `http://localhost:3000/divide?a=${NUM1}&b=${NUM2}`
      );
      result = await response.json();
      break;
  }
  return result;
}

document.getElementById("button").addEventListener("click", async () => {
  const input = document.getElementById("input").value;
  const result = await cal(input);
  document.querySelector(".result").innerText = result;
});
