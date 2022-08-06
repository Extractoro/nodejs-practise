class Calculator {
  constructor(operator, numbersArray) {
    this.operator = operator;
    this.numbersArray = numbersArray;
  }

  calc(operator, numbersArray) {
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

  // calc = (operator, numbersArray) => {
  //   let res = null;
  //   switch (operator) {
  //     case "sum":
  //       res = numbersArray.reduce((total, num) => total + num, 0);
  //       break;

  //     case "sub":
  //       res = numbersArray.reduce((total, num) => total - num);
  //       break;

  //     case "mult":
  //       res = numbersArray.reduce((total, num) => total * num);
  //       break;

  //     case "div":
  //       res = numbersArray.reduce((total, num) => total / num);
  //       break;

  //     default:
  //       console.log("Unknown command");
  //       break;
  //   }
  //   return res;
  // };

  init() {
    return this.calc(this.operator, this.numbersArray);
  }
  // init = () => {
  //   return this.calc(this.operator, this.numbersArray);
  // };

  vadym = "Tytarenko Vadym";
  hobby = ["basketball", "volleyball", "games"];
}

module.exports = Calculator;
