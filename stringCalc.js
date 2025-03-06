// stringCalc.js

function addNumbers(input) {
  if (!input) return 0;

  // Seperated by comma `,`
  let delimiters = [",", "\n"];

  // Check for custom delimiter (e.g., `//;\n1;2;3`)
  const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    delimiters.push(customDelimiterMatch[1]); // Add custom delimiter
    input = input.split("\n").slice(1).join("\n"); // Remove delimiter declaration
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numbers = input
    .split(regex)
    .map((num) => num.trim())
    .filter((num) => num !== "");

  const parsedNumbers = numbers.map(Number);

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = addNumbers;
