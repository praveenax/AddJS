const addNumbers = require("./stringCalc");

describe("String Calculator - addNumbers", () => {
  describe("Basic Addition Tests", () => {
    test("returns 0 for empty string", () => {
      expect(addNumbers("")).toBe(0);
    });

    test("returns number itself for a single number", () => {
      expect(addNumbers("5")).toBe(5);
    });

    test("returns sum for multiple numbers", () => {
      expect(addNumbers("5,1")).toBe(6);
    });
  });

  describe("Handling Different Delimiters", () => {
    test("handles newline as delimiter", () => {
      expect(addNumbers("1\n2,3")).toBe(6);
    });

    test("handles custom delimiter", () => {
      console.log(addNumbers("//;\n1;2;3"));
      expect(addNumbers("//;\n1;2;3")).toBe(6);
    });

    test("handles multi-character delimiter", () => {
      expect(addNumbers("//[***]\n1***2***3")).toBe(6);
    });

    test("handles multiple custom delimiters", () => {
      expect(addNumbers("//[*][%]\n1*2%3")).toBe(6);
    });

    test("handles multiple multi-character delimiters", () => {
      expect(addNumbers("//[***][###]\n1***2###3")).toBe(6);
    });
  });

  describe("Handling Edge cases", () => {
    test("throws error for negative numbers", () => {
      expect(() => addNumbers("1,-2,3,-4")).toThrow(
        "Negatives not allowed: -2, -4"
      );
    });

    test("ignores numbers gt 1000", () => {
      expect(addNumbers("2,1001,3")).toBe(5);
    });
  });
});
