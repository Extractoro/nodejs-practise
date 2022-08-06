// sum
// sub
// mult
// div

// console.log(process.argv);
const [, , command, ...args] = process.argv;

const numbers = args.map((num) => Number(num));

let res = null;

switch (command) {
  case "sum":
    res = numbers.reduce((total, num) => total + num, 0);
    break;

  case "sub":
    res = numbers.reduce((total, num) => total - num);
    break;

  case "mult":
    res = numbers.reduce((total, num) => total * num);
    break;

  case "div":
    res = numbers.reduce((total, num) => total / num);
    break;

  default:
    console.log("Unknown command");
    break;
}

console.log(res);
