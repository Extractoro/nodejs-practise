class Calculator {
  // constructor(operator, numbersArray) {
  //   this.operator = operator;
  //   this.numbersArray = numbersArray;
  // }

  static PI = 3.14;
  static calc(operator, numbersArray) {
    // console.log("calc", this);
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
  }

  static init(operator, numbersArray) {
    // console.log("init", this);
    return this.calc(operator, numbersArray);
  }

  // vadym = "Tytarenko Vadym";
  // hobby = ["basketball", "volleyball", "games"];
}

module.exports = Calculator;
