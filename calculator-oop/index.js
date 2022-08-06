const { command, numbers } = require("./utils");
const Calculator = require("./Calculator");

// const result = Calculator.calc(command, numbers);
const calc = new Calculator(command, numbers);
console.log(calc.init());
