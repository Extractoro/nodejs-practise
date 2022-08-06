// sum
// sub
// mult
// div

const [, , command, ...args] = process.argv;

const numbers = args.map((num) => Number(num));

const calc = (operator, numbersArray) => {
  let res = null;
  switch (operator) {
    case "sum":
      res = numbersArray.reduce((total, num) => total + num, 0);
      break;

    case "sub":
      res = numbersArray.reduce((total, num) => total - num);
      break;

    case "mult":
      res = numbersArray.reduce((total, num) => total * num);
      break;

    case "div":
      res = numbersArray.reduce((total, num) => total / num);
      break;

    default:
      console.log("Unknown command");
      break;
  }
  return res;
};

const result = calc(command, numbers);
console.log(result);
