const { command, numbers } = require("./utils");
const Calculator = require("./Calculator");

// const result = Calculator.calc(command, numbers);
// const calc = new Calculator(command, numbers);
// console.log(calc.init());

// instance
// const homeGallery = new Gallery(imagesForHome);
// const aboutGallery = new Gallery(imagesForAbout);

console.log(Calculator.init(command, numbers));
// console.log(Calculator.PI);
