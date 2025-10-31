// Redo from scratch












































// let currentNumber = ''
// let lastNumber = ''
// let operator = null
//
// const display = document.getElementById('displayText');
// const buttons = document.getElementById('buttons')
// buttons.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'BUTTON') return;
//     const input = event.target.textContent.trim();
//
//     if (!isNaN(input) || input === '.'){
//      currentNumber += input;
//      display.textContent = currentNumber;
//     }
//
//     else if (input === 'AC'){
//         currentNumber = ''
//         lastNumber = ''
//         operator = null;
//         display.textContent = ''
//     }
//
//     else if (input === '=') {
//         if (operator && lastNumber !== "" && currentNumber !== "") {
//             const num1 = parseFloat(lastNumber);
//             const num2 = parseFloat(currentNumber);
//             let result;
//
//             switch (operator) {
//                 case '+':
//                     result = add(num1, num2);
//                     break;
//                 case '-':
//                     result = sub(num1, num2);
//                     break;
//                 case '*':
//                     result = mul(num1, num2);
//                     break;
//                 case '/':
//                     result = div(num1, num2);
//                     break;
//                 default:
//                     result = 0;
//             }
//             display.textContent = result;
//             currentNumber = result.toString();
//             lastNumber = ''
//             operator =null;
//         }
//     }
//     else {
//         if (currentNumber === "" && display.textContent !== ""){
//             lastNumber = display.textContent;
//         } else {
//             lastNumber = currentNumber
//         }
//         operator = input;
//         currentNumber = '';
//     }
// })
//
// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//     return a*b
// }
// function div(a,b){
//     return a/b
// }
