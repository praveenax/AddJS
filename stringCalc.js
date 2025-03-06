// stringCalc.js

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractDelimiters(input) {
  let delimiters = [",", "\n"];

  const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    let delimiterSection = customDelimiterMatch[1]; // Extract delimiters
    input = input.split("\n").slice(1).join("\n");

    if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
      delimiters = delimiterSection
        .match(/\[(.*?)\]/g)
        .map((d) => d.slice(1, -1));
    } else {
      // Single-character delimiter (e.g., //;\n)
      delimiters = [delimiterSection];
    }
  }

  return { delimiters, sanitizedInput: input };
}

function splitNumbers(input, delimiters) {
  const regex = new RegExp(delimiters.map((d) => escapeRegExp(d)).join("|"));
  return input
    .split(regex)
    .map((num) => num.trim())
    .filter((num) => num !== "");
}

function validateAndSum(numbers) {
  const parsedNumbers = numbers.map(Number);

  // Check for negative numbers
  const negatives = parsedNumbers.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  // Sum numbers, ignoring those greater than 1000
  return parsedNumbers.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}

function addNumbers(input) {
  if (!input) return 0;

  const { delimiters, sanitizedInput } = extractDelimiters(input);
  const numbers = splitNumbers(sanitizedInput, delimiters);
  return validateAndSum(numbers);
}

module.exports = addNumbers;
