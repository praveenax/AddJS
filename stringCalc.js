// stringCalc.js

function addNumbers(input) {
  if (!input) return 0;

  // Seperated by comma `,`
  let delimiters = [","];

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numbers = input
    .split(regex)
    .map((num) => num.trim())
    .filter((num) => num !== "");

  const parsedNumbers = numbers.map(Number);

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = addNumbers;
