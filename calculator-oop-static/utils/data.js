const [, , command, ...args] = process.argv;
const numbers = args.map((num) => Number(num));

module.exports = {
  command,
  numbers,
};
